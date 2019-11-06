// @ts-nocheck
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
  NavDropdown,
  ListGroup,
  Image
} from 'react-bootstrap';
import {
  Redirect
}from 'react-router-dom';

import API from '../../services';


const data = '';
const lista = '';


export default class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      lista: ''
    };

    try{
      this.data = JSON.parse(localStorage.getItem('datauser'));

      console.log('/peoples?email='+this.data[0].Email+'&id='+this.data[0].ID)

      API.get('/peoples?email='+this.data[0].Email+'&id='+this.data[0].ID)
      .then((result) => {

        this.lista = result.data
        
        console.log(result.data);
      
      }).catch((err) => {

      });


    }catch{
      this.props.history.push('/');//Redirecionando para pagina
    }
    
  }

  render() {
    try{
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Agenda Terça</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={this.data[0].Name.toString()} id="collasible-nav-dropdown" className="mt-2">
              <NavDropdown.Item href="#action/3.1">Adicio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="collasible-nav-dropdown">
              <Image  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Row>
          <Col sm={12} xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />                  
                  </Col>
                  <Col className="mt-2">
                    <h4>Bruno</h4>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8} xs={12} md={4}>
          
          </Col>
        </Row>
      </>
    );
  }catch{
    return (<Redirect to="/" />);
  }
}
}