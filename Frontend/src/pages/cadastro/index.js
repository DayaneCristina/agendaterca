import React, { Component } from 'react';
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
    Form,
} from 'react-bootstrap';
import {
    Redirect
} from 'react-router-dom';
import API from '../../services';


export default class People extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: []
        };
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
                            <Card className="shadow m-1 bg-white rounded">
                                <Card.Header>
                                    <h1>People</h1>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="justify-content-md-center">
                                        <Col md="auto">
                                            <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="200" height="200" roundedCircle />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
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
                                                        <Form.Control type="date" placeholder="Data" />
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row className="mt-2">
                                                    <Col sm={2} xs={2} md={2}>
                                                        <Form.Control as="select" >
                                                            <option>E-mail</option>
                                                            <option>E-mail</option>
                                                            <option>E-mail</option>
                                                            <option>E-mail</option>
                                                        </Form.Control>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control type="text" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )
        } catch{
            return (<Redirect to="/" />);
        }
    }

}