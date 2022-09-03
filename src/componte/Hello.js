import React, { useState } from "react";
import pic from "../image/computer.jpeg";
// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Hello() {
  return (
    <div className="full">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <div className="body">
        <hr></hr>
        <h2>
          I'm <span className="span">Muhammed Sianb</span>
        </h2>
        <h3>Junior Developer</h3>
        <img className="pic" src={pic} alt="" />
      </div>
    </div>
  );
}

export default Hello;
