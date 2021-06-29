import React, { useEffect, useRef, useState } from "react";

import LikeDislikeButtons from './LikeDislikeButtons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
  const project = props.project;
  const loggedIn = props.loggedIn;

  return (
    <tr>
      <td className="project-name" onClick={() => props.onViewProject(project.id)} >
        <label>{project.name}</label>
      </td>

      <LikeDislikeButtons
        loggedIn={loggedIn}
        project={project} />

      <td className="action" onClick={() => props.onViewProject(project.id)} >
        <button
          className="empty-button"
          onClick={props.onViewProject}
          value={project.id} >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </td>
  </tr>
  )
}

export default Project;