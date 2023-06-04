import React from 'react';
import { Col, Row, Container, Form,Card } from "react-bootstrap";
import { LoginCard, LoginButton,  } from "./styles";

function Login(){
return (
  <Container fluid>
    <LoginCard className="justify-content-md-center">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h3>Login</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label htmlFor="apiKey">
                  <strong> Entre com chave key:</strong>
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="password" id="apiKey" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <LoginButton
                  variant="primary"
                  size="lg"
            
                >
                  Entrar
                </LoginButton>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </LoginCard>
  </Container>
);
}
export default Login;