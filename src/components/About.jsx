import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaLaptopCode,
  FaGraduationCap,
  FaBook,
  FaCode,
  FaCheckCircle,
  FaProjectDiagram
} from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay * 0.15}s;
  opacity: 0;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.cardBg === "#1E1E1E" ? "#2a2a2a" : "#f0f0f0"};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 107, 0, 0.15);
    
    .service-icon {
      animation: ${pulse} 1.5s infinite;
      background: rgba(255, 107, 0, 0.1);
    }
  }

  .service-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 107, 0, 0.05);
    border-radius: 50%;
    color: ${({ theme }) => theme.primary};
    font-size: 28px;
    transition: all 0.3s ease;
    filter: ${({ theme }) => theme.cardBg === "#1E1E1E" ? "brightness(1.2)" : "none"};
  }

  h4 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    line-height: 1.6;
    font-size: 15px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const SectionSubtitle = styled.h3`
  text-align: center;
  margin-bottom: 60px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 1.4rem;
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const education = [
    {
      title: "Diplomado en Programación",
      description: "Cuento con un Diplomado en Programación de Aplicaciones Informáticas",
      icon: <FaGraduationCap />,
    },
    {
      title: "Ingeniería en Sistemas",
      description: "Cursando mi último año de bachillerato en la Universidad Nacional de Costa Rica",
      icon: <FaLaptopCode />,
    },
    {
      title: "Autoaprendizaje",
      description: "Cursos complementarios en diseño UI/UX y tecnologías frontend modernas",
      icon: <FaBook />,
    },
  ];

  const experience = [
    {
      title: "Gestión de Activos (Proyecto Universitario)",
      description: "Desarrollo colaborativo del sistema incluyendo: implementación, pruebas QA y despliegue. Realizando pruebas manuales y reporte de bugs",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Scrum Master",
      description: "Liderando el equipo de manera ágil en diferentes sprint del proyecto de Gestión de Activos, facilitando sprint plannings, daily stand-ups, sprint reviews y retrospectivas",
      icon: <DiScrum />,
    },
    {
      title: "Control de Calidad",
      description: "Implementé procesos de QA para el sistema de gestión, incluyendo pruebas de usabilidad y documentación de casos de prueba",
      icon: <FaCheckCircle />,
    },
    {
      title: "Proyectos Académicos",
      description: "Desarrollo de sistemas web usando React, Node.js y MySQL, aplicando metodologías ágiles",
      icon: <FaCode />,
    },
  ];


  return (
    <Container id="about" className="py-5">
      {/* Sección de Educación */}
      <SectionTitle>Educación</SectionTitle>
      <SectionSubtitle>Mi formación académica</SectionSubtitle>

      <Row className="mb-5">
  {education.map((item, index) => (
    <Col md={4} sm={6} key={`edu-${index}`} className="mb-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={index * 100}>
      <ServiceCard delay={index} className="text-center">
        <div className="service-icon">{item.icon}</div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </ServiceCard>
    </Col>
  ))}
</Row>
      {/* Sección de Experiencia */}
      <SectionTitle>Experiencia</SectionTitle>
      <SectionSubtitle>Mi desarrollo práctico y profesional</SectionSubtitle>

      <Row className="mb-5">
  {experience.map((item, index) => (
    <Col md={6} sm={6} key={`exp-${index}`} className="mb-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={(index + education.length) * 100}>
      <ServiceCard delay={index + education.length} className="text-center">
        <div className="service-icon">{item.icon}</div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </ServiceCard>
    </Col>
  ))}
</Row>

    </Container>
  );
};

export default About;

