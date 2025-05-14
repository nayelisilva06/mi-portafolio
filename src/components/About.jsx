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
import { ServiceCard, SectionTitle, SectionSubtitle} from "../assets/styles/About.styles";
import AOS from "aos";
import "aos/dist/aos.css";


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

