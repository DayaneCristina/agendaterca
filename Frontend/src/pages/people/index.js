import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Image,
  Button
} from 'react-bootstrap';
import {
  Redirect
} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../services';

const AlertSweet = withReactContent(Swal);

export default class People extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      sobrenome: '',
      aniversario: '',
      email: '',
      numero: ''
    };
    try {
      this.data = JSON.parse(localStorage.getItem('datauser'));
      API.get('/people?email=' + this.data[0].Email + '&id=' + this.props.match.params.id)
        .then((result) => {
          this.setState({
            nome: result.data[0].Nome,
            sobrenome: result.data[0].Sobrenome,
            aniversario: result.data[0].Aniversario,
            email: result.data[0].Email,
            numero: result.data[0].Phone
          });
        }).catch((err) => {

        });
    } catch{
      this.props.history.push('/');//Redirecionando para pagina
    }
    this.handleChange = this.handleChange.bind(this);
    this.cadastrarContato = this.cadastrarContato.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  voltar() {
    this.props.history.push(`/home`);
  }

  cadastrarContato(event) {
    if (this.state.nome.length === 0 || this.state.sobrenome.length === 0 || this.state.aniversario.length === 0 || this.state.email.length === 0 || this.state.numero.length === 0) {

      AlertSweet.fire({
        title: 'Atenção',
        icon: 'warning',
        text: 'Campos em branco, preencha corretamente'
      });

    }
    else {

      API.put('/people',
        {
          user: {
            id_user: this.data[0].ID
          },
          people: {
            id_people: this.props.match.params.id,
            name_people: this.state.nome,
            nickname_people: this.state.sobrenome,
            birthday_people: this.state.aniversario,
            email_people: this.state.email,
            phone_people: this.state.numero
          }
        }
      ).then((result) => {

        if (result.data) {

          AlertSweet.fire({
            title: 'Confirmação',
            icon: 'success',
            text: 'Cadastrado com sucesso'
          });

          this.props.history.push('/home');

        }
        else {

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

  exit() {
    localStorage.clear();
    window.location.reload(true);
  }

  render() {
    try {
      return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">Agenda Terça</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home" >Inicio</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title={this.data[0].Name.toString()} id="collasible-nav-dropdown" className="mt-2">
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.exit}>Sair</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link id="collasible-nav-dropdown">
                  <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="50" height="50" roundedCircle />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row className="p-5">
            <Col xl={12} sm={12} xs={12} md={12} lg={12}>
              <Card className="shadow m-1 bg-white rounded">
                <Card.Header>
                  <h1>Contato</h1>
                </Card.Header>
                <Card.Body>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="150" height="150" roundedCircle />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form className="mt-5" onSubmit={this.cadastrarContato}>
                        <Form.Row>
                          <Col xs={12} lg={4}>
                            <Form.Control type="text" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
                          </Col>
                          <Col xs={12} lg={4}>
                            <Form.Control type="text" placeholder="Sobrenome" name="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} />
                          </Col>
                          <Col xs={12} lg={4}>
                            <Form.Control type="date" placeholder="Data" name="aniversario" value={this.state.aniversario} onChange={this.handleChange} />
                          </Col>
                        </Form.Row>
                        <Form.Row className="mt-2 pt-1">
                          <Col xs={12} lg={6}>
                            <Form.Control type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={this.handleChange} />
                          </Col>
                          <Col xs={12} lg={6}>
                            <Form.Control type="text" placeholder="Numero" name="numero" value={this.state.numero} onChange={this.handleChange} />
                          </Col>
                        </Form.Row>
                        <Form.Row className="mt-2">
                          <Row className="mt-2 p-1">
                            <Col xs={6} lg={6}>
                              <Button
                                type="submit"
                                variant="success"
                              >
                                Atualizar
                                  </Button>
                            </Col>
                            <Col xs={6} lg={6}>
                              <Button
                                type="button"
                                onClick={() => this.voltar()}
                                variant="primary"
                              >
                                Voltar
                                  </Button>
                            </Col>
                          </Row>
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