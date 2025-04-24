
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FiGithub, FiLinkedin} from "react-icons/fi"; 

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  a {
    color: #ff7b29;
    font-size: 1.8rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff914d;
    }
  }
`;

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Portfolio Kristin - Todos los derechos reservados</p>
      <SocialLinks className="mb-3 text-center py-3">
        <a href="https://github.com/nayelisilva06" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/nayeli-zúñiga-silva-740258362/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
      </SocialLinks>
   </Container>
    
  );
};

export default Footer;
