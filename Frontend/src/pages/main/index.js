import React, { Component } from 'react';
import './style.css';
import 
{ 
  Container,
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

const data = '';

export default class Main extends Component {

  constructor(props){
    super(props)

    this.data = JSON.parse(localStorage.getItem('datauser'));
    
    
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Agenda Terça</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <NavDropdown title="Contatos" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adicio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title={this.data[0].Name.toString()} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adicio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="collasible-nav-dropdown">
              <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" className="rounded-circle"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}