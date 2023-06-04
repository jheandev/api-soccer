import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PlayersTable from "./components/playersTable";
import TeamStatistics from "./components/TeamStatistics";
import NavHome from "./components/NavHome";

import { HomeContainer, HomeCard, Results } from "./styles";




function Home() {


  return (
    <>
       <NavHome />
        <HomeContainer>
        <Row>
          <Col>
            <h2>Home</h2>           
          </Col>
        </Row>
        <HomeCard>
          <Card.Header>Resultados</Card.Header>
          <Card.Text>
            <Results>
              <Col md={6}>
                <PlayersTable />
              </Col>
              <Col md={6}>
                <TeamStatistics />
              </Col>
            </Results>
          </Card.Text>
        </HomeCard>
        </HomeContainer>
    </>
  );
}

export default Home;
