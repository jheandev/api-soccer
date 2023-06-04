import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function Filter({ countries }) {
  return (
    <Row>
      <Col md={3}>
        <Form.Select>
          <option>Selecione o pais</option>
          {countries.map((c) => {
            return <option value={c.code}>{c.name}</option>;
          })}
        </Form.Select>
      </Col>
      <Col md={5}>
        <Form.Select>
          <option>Selecione o liga</option>
          <option value="1">Brasil</option>
        </Form.Select>
      </Col>
      <Col md={4}>
        <Form.Select>
          <option>Selecione o time</option>
          <option value="1">Brasil</option>
        </Form.Select>
      </Col>
    </Row>
  );
}
export default Filter;
