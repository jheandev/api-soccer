import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ballIcon from "../../../../assets/images/ball-icon.png";

function NavHome() {
    const navigate = useNavigate();
    const logout = () => {
      navigate("/");
    };
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ballIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Meu Time
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={logout}>Sair</Nav.Link>s
          </Nav>
        </Container>
      </Navbar>
    );
  }

export default NavHome;