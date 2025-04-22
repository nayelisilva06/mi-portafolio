import React, { useState } from "react";
import styled from "styled-components";
import { Card, Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import proyectoactivos from "../assets/images/proyectoactivos.png";
import iniciosesion from "../assets/images/iniciosesion.png";
import asistentevirtual from "../assets/images/asistentevirtual.png";

const PortfolioContainer = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(243, 135, 47, 0.47);
  }
`;

const ProjectImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TagBadge = styled.span`
  background-color: ${({ theme }) => theme.primary} !important;
  color: white !important;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  display: inline-block;
`;

const ProjectCarousel = styled(Carousel)`
  .carousel-indicators button {
    background-color: ${({ theme }) => theme.primary};
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    padding: 10px;
  }
`;
const OrangeButton = styled(Button).attrs({
  className: 'mx-1'
})`
  && {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: white;
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;
const projects = [
  {
    title: "Sistema de Gestión de Activos",
    description: "Sistema completo para la administración de activos de un colegio con inventario, seguimiento y reportes",
    images: [iniciosesion, proyectoactivos],
    tags: ["React", "Node.js", "MySQL", "TypeScript"],
    features: [
      "Registro de activos",
      "Sistema de inventario",
      "Generación de reportes",
      "Gestión de usuarios"
    ]
  },
  {
    title: "Asistente Virtual",
    description: "Asistente virtual interactivo desarrollado como proyecto académico",
    images: [asistentevirtual], 
    tags: ["JavaScript", "HTML5", "CSS3", "Web Speech API"],
    features: [
      "Reconocimiento de voz",
      "Interacción conversacional",
      "Respuestas programadas",
      "Interfaz amigable"
    ],
    demoUrl: "https://lab2-fund-web.vercel.app/", // Enlace directo al demo
    githubUrl: "https://github.com/nayelisilva06/Lab2FundWeb" // Agrega el enlace al repositorio si lo tienes
  }

];

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openImageModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setActiveIndex(0);
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <PortfolioContainer id="portfolio">
      <h2>Mis Proyectos</h2>
      <Container className="py-5">
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <StyledCard>
                {project.images && project.images.length > 0 ? (
                  <ProjectCarousel 
                    activeIndex={activeIndex}
                    onSelect={handleSelect}
                    interval={null}
                  >
                    {project.images.map((image, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <ProjectImageContainer onClick={() => openImageModal(project)}>
                          <ProjectImage 
                            src={image} 
                            alt={`Captura ${imgIndex + 1} del proyecto ${project.title}`}
                          />
                        </ProjectImageContainer>
                      </Carousel.Item>
                    ))}
                  </ProjectCarousel>
                ) : (
                  <ProjectImageContainer onClick={() => openImageModal(project)}>
                    <ProjectImage 
                      src={project.image || "placeholder.jpg"} 
                      alt={`Captura del proyecto ${project.title}`}
                    />
                  </ProjectImageContainer>
                )}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  
                  <div className="text-start mb-3">
                    <h6 className="mb-3">Características:</h6>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <TagBadge key={i}>
                        {tag}
                      </TagBadge>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center gap-2">
  {project.githubUrl && (
    <OrangeButton 
      size="sm"
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Código
    </OrangeButton>
  )}
  {project.demoUrl && (
    <OrangeButton 
      size="sm"
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver Demo
    </OrangeButton>
  )}
</div>
                </Card.Body>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-0">
          {selectedProject && selectedProject.images && (
            <ProjectCarousel activeIndex={activeIndex} onSelect={handleSelect}>
              {selectedProject.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img 
                    src={image} 
                    alt={`Vista ${index + 1} del proyecto ${selectedProject.title}`} 
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      maxHeight: '80vh'
                    }}
                  />
                </Carousel.Item>
              ))}
            </ProjectCarousel>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </PortfolioContainer>
  );
};


export default Portfolio;
