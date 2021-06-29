import React, { useState } from "react"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal(props) {

  const project = props.project;

  let modalName = "Viewing project";
  let projectName;

  if (!project) {
    projectName = "TODO render form"
  } else {
    projectName = project.name;
  }

  function addProject() {
    console.log('adding project');
    props.onHide;
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{modalName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{projectName}</Modal.Body>
        <Modal.Footer>
          {!project && <Button variant="primary" onClick={addProject} projectId={props.projectId} >
            Add project for voting
          </Button>}
          {project && <Button variant="secondary" onClick={props.onHide} >
            Close
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ProjectModal
