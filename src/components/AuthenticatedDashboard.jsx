import React, { useState } from "react"

import Button from 'react-bootstrap/Button';

import Projects from "./Projects";
import Navbar from "./BuildmeNavbar";
import AddProjectPhaseText from "./AddProjectPhaseText";
import ProjectModal from "./ProjectModal";

function AuthenticatedDashboard(props) {

  const [modalShow, setModalShow] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  
  function displayProjectModal(id) {
    // if null, we're adding a project
    if (id) {
      let project = props.projects.find(o => parseInt(o.id) === parseInt(id));
      setModalProject(project);
    }
    setModalShow(true);
  }

  function closeProjectModal() {
    setModalShow(false);
  }

  return (
    <>
      <Navbar
        handleAuth={props.handleAuth}
        authText={props.authText}
      />

      <AddProjectPhaseText />

      <div className="bg-light" >
        <div className="container py-5" >
          <Projects 
            projects={props.projects}
            loggedIn={true}
            onViewProject={displayProjectModal} />

          <Button 
            variant="primary"
            className="my-3"
            onClick={() => displayProjectModal(null)} >
            Add New Project
          </Button>
        </div>
      </div>

      <ProjectModal 
        show={modalShow}
        onHide={closeProjectModal}
        project={modalProject} />

    </>
  );
}

export default AuthenticatedDashboard
