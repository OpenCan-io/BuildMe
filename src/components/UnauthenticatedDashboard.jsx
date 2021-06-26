import React, { useState } from "react"

import Projects from "./Projects";
import AddProjectPhaseText from "./AddProjectPhaseText";
import Navbar from './BuildmeNavbar';
import ProjectModal from "./ProjectModal";

function UnauthenticatedDashboard(props) {
  
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
        authText={props.authText} />
      
      <AddProjectPhaseText />

      <div className="bg-light" >
        <div className="container py-5" >
          <Projects
            projects={props.projects} 
            loggedIn={false}
            onViewProject={displayProjectModal} />
        </div>
      </div>
      
      <ProjectModal 
        show={modalShow}
        project={modalProject}
        onHide={closeProjectModal} />
    </>
  );
}

export default UnauthenticatedDashboard
