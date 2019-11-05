// @ts-nocheck
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

  constructor(props) {
    
    super(props);
    
    this.state = {
      email: '',
      senha:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(event) {
    this.setState({email: event.target.email, senha: event.target.senha});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.email + this.state.senha);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow p-5 mb-5 bg-white rounded formLogin box">
              <form method="POST" onSubmit={this.handleSubmit} className="mt-5 p-3">
                <Form.Group controlId="" classNameName="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" value={this.state.senha} onChange={this.handleChange} />
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
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom"></div>
          </div>
        </div>
      </Container>
    );
  }
}