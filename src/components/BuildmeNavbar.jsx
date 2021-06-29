import React from "react"

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function BuildmeNavbar(props) {
  
  return (
    <Navbar fixed="top" bg="light">
      <Container>
        <Navbar.Brand href="#home">BuidlMe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button 
            variant="primary"
            onClick={props.handleAuth}
          >{props.authText}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BuildmeNavbar