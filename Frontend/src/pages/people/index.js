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
    try {
      this.data = JSON.parse(localStorage.getItem('datauser'));
      API.get('/people?email=' + this.data[0].Email + '&id=' + this.props.match.params.id)
        .then((result) => {
          this.setState({ people: result.data });
          console.log(this.props.people[0]);
        }).catch((err) => {

        });
    } catch{
      this.props.history.push('/');//Redirecionando para pagina
    }
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
                {
                  this.state.people.map(people => (
                    <Row>
                      <Col>
                        <Form className="mt-5">
                          <Form.Row>
                            <Col>
                              <Form.Control type="text" placeholder="Nome" disabled value={people.Nome} />
                            </Col>
                            <Col>
                              <Form.Control type="text" placeholder="Sobrenome" disabled value={people.Sobrenome} />
                            </Col>
                          </Form.Row>
                          <Form.Row className="mt-2">
                            <Col>
                              <Form.Control type="date" placeholder="Data" disabled value={people.Aniversario} />
                            </Col>
                          </Form.Row>
                        </Form>
                      </Col>
                    </Row>
                  ))
                }
                { this.state.people.map(contact => (
                    <Form.Row className="mt-2">
                      <Col sm={2} xs={2} md={2}>
                        <Form.Control as="select" disabled>
                          <option>{contact.Nome}</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Control type="text" disabled value={contact.Nome} />
                      </Col>
                    </Form.Row>
                  ))
                }
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