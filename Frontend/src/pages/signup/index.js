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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../services';

const AlertSweet = withReactContent(Swal);



export default class SignUp extends Component {

  constructor(props) {
    //Definindo props -- OBRIGATORIO MANTER
    super(props);
    
    //Inputs que será utilizado
    this.state = {
      nome:'',
      email: '', 
      senha: ''
    };

    //Iniciando functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Função de SET do formulario
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //Função de SUBMIT
  handleSubmit(event) {
    if(this.state.email.length === 0 || this.state.senha.length === 0){
      
      AlertSweet.fire({
        title: 'Atenção',
        icon: 'warning',
        text: 'Campos em branco, preencha corretamente'
      });

    }
    else{

      API.post('/user',
      {
          nome  :    this.state.nome,
          email :    this.state.email,
          senha :    this.state.senha
      }
      ).then((result) => {

        if(result.data){
         
          AlertSweet.fire({
            title: 'Confirmação',
            icon: 'success',
            text: 'Cadastrado com sucesso'
          });

          this.props.history.push('/');//Redirecionando para pagina

        }
        else{
         
          AlertSweet.fire({
            title: 'Erro',
            icon: 'error',
          });
        
        }        
      }).catch((err) => {
        
        AlertSweet.fire({
          title: 'Erro',
          icon: 'error',
        });

      });
   
    }
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow p-5 mb-5 bg-white rounded formLogin box">
              <Form onSubmit={this.handleSubmit} className="mt-5 p-3">
                <Form.Group controlId="" className="">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" name="nome" placeholder="Nome" value={this.state.nome} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="" className="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.handleChange} />
                </Form.Group>
                <Row>
                  <Col>
                    <Button variant="primary" href="/" size="lg" block>
                      Volta
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit" size="lg" block variant="success">
                      Cadastrar
                    </Button>
                  </Col>
                </Row>
              </Form>
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