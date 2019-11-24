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
  Image,
  Button
} from 'react-bootstrap';
import {
  Redirect,
  Link
} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../services';


const AlertSweet = withReactContent(Swal);


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
    //Iniciando functions
    this.deletarContato = this.deletarContato.bind(this);
  }

  visualizarContato(people) {
    this.props.history.push(`/people/${people.ID}`);
  }

  deletarContato(people) {
    console.log(people.ID);
    console.log(this.data[0].ID);
    API.delete(`/people/${this.data[0].ID}/${people.ID}`)
      .then((result) => {
        window.location.reload(false);
      })
      .catch((err) => {
        window.location.reload(true);
      });
  }

  questionDeletar(dados) {
    AlertSweet.fire({
      title: 'Confirmação',
      icon: 'question',
      text: `Deseja deletar o contado do ${dados.Nome} ${dados.Sobrenome}?`,
      showCancelButton: true,
    }).then((decicao) => {
      if (decicao.value) {
        this.deletarContato(dados);
      }
    });
  }

  adicionarContato() {
    this.props.history.push(`/people`);
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
                <Nav.Link href="/home">Inicio</Nav.Link>
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
          <Row>
            <Col xl={12} sm={12} xs={12} md={12} lg={12}>
              <Card className="shadow m-2">
                <Card.Header className="shadow-lg mb-1 bg-white">
                  <Row>
                    <Col xs={10} xl={10} sm={12} xs={12} md={12} lg={12}>
                      <h3>
                        Lista de contato
                      </h3>
                    </Col>
                    <Col xs={2} xl={2} sm={12} xs={12} md={12} lg={12}>
                      <Link to="/people">
                        <Button variant="success" onClick={() => this.adicionarContato()}>
                          Adicionar
                      </Button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Header>
              </Card>
            </Col>
          </Row>
          <Row className="p-3">
            {this.state.lista.map(contato => (
              <Col xs={4} xl={4} sm={4} xs={12} md={12} lg={12}>
                <Card className="shadow m-2 bg-white">
                  <Card.Body>
                    <Row className="justify-content-md-center">
                      <Col md="auto">
                        <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" width="80" height="80" roundedCircle />
                      </Col>
                    </Row>
                    <Col className="mt-2 pt-3 pb-3 text-center">
                      <h3>{contato.Nome} {contato.Sobrenome}</h3>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={6} xl={6} sm={12} xs={12} md={12} lg={12} className="p-1">
                          <Button id={contato.ID} onClick={() => this.visualizarContato(contato)} key={contato.ID} block size="lg">
                            Visualizar
                          </Button>
                        </Col>
                        <Col xs={6} xl={6} sm={12} xs={12} md={12} lg={12} className="p-1">
                          <Button id={contato.ID} onClick={() => this.questionDeletar(contato)} key={contato.ID} variant="danger" block size="lg">
                            Excluir
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      );
    } catch{
      return (<Redirect to="/" />);
    }
  }
}