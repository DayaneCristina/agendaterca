import React, { Component } from 'react';
import './style.css';
import 
{ 
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

const data = '';

export default class Main extends Component {

  constructor(props){
    super(props)

    this.data = JSON.parse(localStorage.getItem('datauser'));
    
    
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow p-5 mb-5 bg-white rounded formLogin box">
              <h1>Bem-vindo {this.data[0].Name.toString()}</h1>
              <h3>Estamos carregando seus contatos, por favor aguarde um instante</h3>
              
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}