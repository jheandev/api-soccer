import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function TeamStatistics() {
  return (
    <Card>
      <Card.Header>
        <strong>Estatisticas do time:</strong>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={8}>
            <strong>Formação mais usada:</strong> 4 - 3 - 2 - 1
          </Col>
          <Col md={4}>
            <strong>Total de jogos:</strong> 3
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <strong>Total Vitorias:</strong> 2
          </Col>
          <Col md={4}>
            <strong>Total empates:</strong> 1
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default TeamStatistics;
