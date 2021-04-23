import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function Navb() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">COVID-19 PHI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " >
          <Nav className="mr-auto">
            <Nav.Link href="/health">Health Status</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/dashboard">Profile</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}
export default Navb;
