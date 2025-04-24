import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link
           href="/NayeliZunigaCV.pdf"
            download
            className="d-flex align-items-center gap-1 text-white"
            style={{ fontSize: "0.9rem" }}
          >
            <FaDownload />
            Descargar CV
          </Nav.Link>
          <Nav.Link href="#about">Sobre Mí</Nav.Link>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
          <Nav.Link href="#portfolio">Proyectos</Nav.Link>
          <ThemeToggle />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

