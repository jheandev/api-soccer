import React from "react";
import { Table, Card } from "react-bootstrap";

function PlayersTable() {
    return (
        <Card>
          <Card.Header>
            <strong>Tabela de Jogadores:</strong>
          </Card.Header>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idate</th>
                <th>Nacionalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>12</td>
                <td>Brasileiro</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      );
    }

export default PlayersTable;
