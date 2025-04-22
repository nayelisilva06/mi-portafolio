
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Mi Portafolio - Todos los derechos reservados</p>
    </Container>
  );
};

export default Footer;
