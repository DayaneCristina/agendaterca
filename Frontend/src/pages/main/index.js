// @ts-nocheck
import React, { Component } from 'react';
import './style.css';
import 
{ 
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  ListGroup,
  Image,
  Form,
} from 'react-bootstrap';
import {
  Redirect,
  Link
}from 'react-router-dom';

import API from '../../services';




export default class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      lista: []
    };
    try{
      this.data = JSON.parse(localStorage.getItem('datauser'));
      API.get('/peoples?email='+this.data[0].Email+'&id='+this.data[0].ID)
      .then((result) => {
        this.setState({ lista: result.data });
      }).catch((err) => {
      });
    }catch{
      this.props.history.push('/');//Redirecionando para pagina
    }
  }


  dadosContato(){
    console.log(this.props.id);
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
            <Card className="shadow m-2 bg-white">
              <Card.Header className="shadow-lg mb-1 bg-white">
                <h3>
                  Lista de contato
                </h3>
              </Card.Header>
              <Card.Body className="p-0">
                <ListGroup>
                  {this.state.lista.map(contato => (
                    <Link id={contato.ID} onClick={this.dadosContato}>
                      <ListGroup.Item>
                        <Row>
                          <Col md={2}>
                            <Image  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />                  
                          </Col>
                          <Col className="mt-2 ml-3">
                              <h3>{contato.Nome}</h3>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </Link>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={0} xs={0} md={8}>
            <Card className="shadow m-1 bg-white rounded">
              <Card.Header>
                
              </Card.Header>
              <Card.Body>
                <Row className="justify-content-md-center">
                  <Col md="auto">
                    <Image  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="200" height="200" roundedCircle />                  
                  </Col>
                </Row>
                <Form className="mt-5">
                  <Form.Row>
                    <Col>
                      <Form.Control type="text" placeholder="Nome" />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Sobrenome" />
                    </Col>
                  </Form.Row>
                  <Form.Row className="mt-2">
                    <Col>
                      <Form.Control type="date" placeholder="Nome" />
                    </Col>
                  </Form.Row> 

                  
                  <Form.Row className="mt-2">
                    <Col sm={2} xs={2} md={2}>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control type="text"/>
                    </Col>
                  </Form.Row>  


               </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }catch{
    return (<Redirect to="/" />);
  }
}
}