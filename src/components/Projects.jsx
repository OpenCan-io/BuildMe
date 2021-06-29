import React, { useEffect, useState } from "react";

import Project from './Project';
import Table from 'react-bootstrap/Table';

function Projects(props) {

  return (
    <>
      <h3 className="py-1">Projects</h3>
      <Table responsive className="my-4" >
        {<tbody>
          {Object.entries(props.projects).map(
            project =>
              <Project 
                key={project[1].id} 
                project={project[1]}
                loggedIn={props.loggedIn}
                onViewProject={props.onViewProject} />
          )}
        </tbody>}
      </Table>
    </>
  )
}

export default Projects;