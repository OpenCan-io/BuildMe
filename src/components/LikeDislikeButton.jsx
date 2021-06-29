import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faThumbsUp as fasThumbsUp, 
  faThumbsDown as fasThumbsDown 
} from '@fortawesome/free-solid-svg-icons';

import { 
  faThumbsUp as farThumbsUp, 
  faThumbsDown as farThumbsDown 
} from '@fortawesome/free-regular-svg-icons';

function LikeDislikeButton(props) {
  const loggedIn = props.loggedIn;
  const isLike = props.isLike;
  const userDidVote = props.userDidVote;
  const userDidLike = props.userDidLike;
  const votes = props.votes;

  const icon =  loggedIn ? 
                  userDidVote ? 
                    userDidLike ?
                      isLike ?
                        fasThumbsUp : farThumbsDown
                    : isLike ?
                        farThumbsUp : fasThumbsDown
                  : isLike ?
                    farThumbsUp : farThumbsDown
                : isLike ?
                  farThumbsUp : farThumbsDown;
    
  
  return (
      <div style={{textAlign:"center"}}>
        <button
          className="empty-button">
          <FontAwesomeIcon icon={icon} />
        </button>
        <div><label>{votes}</label></div>
      </div>
  )
}

export default LikeDislikeButton;