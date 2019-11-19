// @ts-nocheck
import React, { Component } from 'react';
import './style.css';
import {
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  ListGroup,
  Image,
  Button,
} from 'react-bootstrap';
import {
  Redirect
} from 'react-router-dom';

import API from '../../services';




export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lista: [],
      people: []
    };
    try {
      this.data = JSON.parse(localStorage.getItem('datauser'));
      API.get('/peoples?email=' + this.data[0].Email + '&id=' + this.data[0].ID)
        .then((result) => {
          this.setState({ lista: result.data });
        }).catch((err) => {

        });
    } catch{
      this.props.history.push('/');//Redirecionando para pagina
    }
  }

  handleCustomerClick(people) {
    this.props.history.push(`/people/${people.ID}`);
  }

  render() {
    try {
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
                  <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row>
            <Col xl={12} sm={12} xs={12} md={12} lg={12}>
              <Card className="shadow m-2 bg-white">
                <Card.Header className="shadow-lg mb-1 bg-white">
                  <Row>
                    <Col xs={10} xl={10} sm={12} xs={12} md={12} lg={12}>
                      <h3>
                        Lista de contato
                      </h3>
                    </Col>
                    <Col xs={2} xl={2} sm={12} xs={12} md={12} lg={12}>
                      <Button variant="success">
                        Adicionar
                      </Button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className="p-0">
                  <ListGroup>
                    {this.state.lista.map(contato => (
                      <ListGroup.Item>
                        <Row>
                          <Col md={2}>
                            <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />
                          </Col>
                          <Col className="mt-2 ml-3">
                            <h3>{contato.Nome}</h3>
                          </Col>
                          <Col>
                            <Row>
                              <Col xs={6} xl={6} sm={12} xs={12} md={12} lg={12}>
                                <Button id={contato.ID}  onClick={() => this.handleCustomerClick(contato)} key={contato.ID}>
                                  Visualizar
                                </Button>
                              </Col>
                              <Col xs={6} xl={6} sm={12} xs={12} md={12} lg={12}>
                                <Button id={contato.ID}  onClick={() => this.handleCustomerClick(contato)} key={contato.ID} variant="danger">
                                  Excluir
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      );
    } catch{
      return (<Redirect to="/" />);
    }
  }
}