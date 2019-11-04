import React, { Component } from 'react';
import './style.css';
import 
{ 
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
} from 'react-bootstrap';

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow p-5 mb-5 bg-white rounded formLogin box">
              <form method="POST" action="" className="mt-5 p-3">
                <Form.Group controlId="" className="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Row>
                  <Col>
                    <Button variant="primary" href="#" size="lg" block>
                      Cadastrar
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit" size="lg" block>
                      Entrar
                    </Button>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}