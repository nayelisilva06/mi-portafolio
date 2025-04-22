import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiMail } from "react-icons/fi"; 

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  animation: ${fadeIn} 1s ease-in-out;
`;

const StatItem = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-left: 3px solid ${({ theme }) => theme.primary};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const StyledButton = styled(Button)`
  background-color: #ff7b29;
  border: none;
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(255, 123, 41, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #ff914d;
  }
`;

const Hero = ({ onOpenModal }) => {
  return (
    <HeroSection id="home">
      <Container>
        <Row>
          <Col md={6}>
            <h1>¡Hola! Soy</h1>
            <h2 className="display-4 fw-bold mb-3">Nayeli</h2>
            <h3 className="mb-4">Estudiante de Ingeniería en Sistemas de la información</h3>
            <p>
              Soy una estudiante apasionada por la tecnología, con un enfoque en diseño web UX/UI y bases de datos. He trabajado en varios proyectos universitarios que me han permitido adquirir experiencia práctica en programación, diseño web, y administración de bases de datos.
            </p>

            <Row className="mt-4">
              <Col xs={6}>
                <StatItem>
                  <h4>6 años</h4>
                  <p>Estudios</p>
                </StatItem>
              </Col>
              <Col xs={6}>
                <StatItem>
                  <h4>5+</h4>
                  <p>Proyectos</p>
                </StatItem>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <ButtonWrapper>
              <StyledButton onClick={onOpenModal}>
                <FiMail size={20} />
                Contáctame
              </StyledButton>
            </ButtonWrapper>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
