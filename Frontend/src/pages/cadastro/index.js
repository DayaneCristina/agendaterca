import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    Image,
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
                                                    <Form.Control type="text" placeholder="Nome"  />
                                                </Col>
                                                <Col>
                                                    <Form.Control type="text" placeholder="Sobrenome"  />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row className="mt-2">
                                                <Col>
                                                    <Form.Control type="date" placeholder="Data"  />
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
                                                    <Form.Control type="text"  />
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </>
            )
        } catch{
            return (<Redirect to="/" />);
        }
    }

}