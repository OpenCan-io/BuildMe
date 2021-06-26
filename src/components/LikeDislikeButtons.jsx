import React, { useEffect, useRef, useState, useCallback } from "react";

import { buildme } from "../utils/agent"

import LikeDislikeButton from './LikeDislikeButton'

function LikeDislikeButtons(props) {

  const loggedIn = props.loggedIn;
  const project = props.project;

  const [userDidVote, setUserDidVote] = useState(project.userVote.userDidVote)
  const [userDidLike, setUserDidLike] = useState(project.userVote.userDidLike)
  const [projectLikes, setProjectLikes] = useState(project.likes)
  const [projectDislikes, setProjectDislikes] = useState(project.dislikes)

  const handleUserDidLike = (id) => {
    if (loggedIn) {
      // check if the user had voted on this project before
      if (userDidVote) {
        if (userDidLike) { // unlike
          setUserDidLike(false);
          setUserDidVote(undefined);
          setProjectLikes(projectLikes - 1);
        } else { // previous vote had been a dislike
          setUserDidLike(true);
          setProjectLikes(projectLikes + 1);
          setProjectDislikes(projectDislikes - 1);
        }
      } else { // user voted for this first time and liked
        setUserDidLike(true);
        setUserDidVote(true);
        setProjectLikes(projectLikes + 1);
      }
    }
  };
  const handleUserDidDislike = (id) => {
    if (loggedIn) {
      // check if the user had voted on this project before
      if (userDidVote) {
        if (!userDidLike) { // undislike
          setUserDidVote(undefined);
          setProjectDislikes(projectDislikes - 1);
        } else {  // previous vote had been a like
          setUserDidLike(false);
          setProjectLikes(projectLikes - 1);
          setProjectDislikes(projectDislikes + 1);
        }
      } else { // user voted for this first time and disliked
        setUserDidLike(false);
        setUserDidVote(true);
        setProjectDislikes(projectDislikes + 1);
      }
    }
  };

  // TODO backend queries
  async function handleVote() {
    // let voteResult = await (await buildme()).vote(project.id, isLike);
  }

  return (
    <>
      <td className="like-cell" onClick={() => handleUserDidLike(project.id)} >
        <LikeDislikeButton
          loggedIn={loggedIn}
          isLike={true}
          votes={projectLikes}
          userDidVote={userDidVote}
          userDidLike={userDidLike} />
      </td>
      <td className="like-cell" onClick={() => handleUserDidDislike(project.id)} >
        <LikeDislikeButton
          loggedIn={loggedIn}
          isLike={false}
          votes={projectDislikes}
          userDidVote={userDidVote}
          userDidLike={userDidLike} />
      </td>
    </>
  )
}

export default LikeDislikeButtons;