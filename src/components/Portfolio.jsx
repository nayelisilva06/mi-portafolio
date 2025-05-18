import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import proyectoactivos from "../assets/images/proyectoactivos.png";
import iniciosesion from "../assets/images/iniciosesion.png";
import asistentevirtual from "../assets/images/asistentevirtual.png";
import foodiet from "../assets/images/foodiet.png";
import {PortfolioContainer, StyledCard, ProjectImageContainer, ProjectImage, TagBadge, ProjectCarousel, OrangeButton} from "../assets/styles/Portfolio.styles";


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
      "Exportación de datos a Excel"
    ]
  },
   {
    title: "Diseño de aplicativo para planificación de dietas",
    description: "Enfoque en alimentación saludable y balanceada, con opciones de personalización",
    images: [foodiet],
    tags: ["Figma", "UI/UX", "Prototipado"],
    features: [
      "Interacción con el usuario",
      "Interfaz amigable"
      
    ],
  },
  
  {
    title: "Asistente Virtual",
    description: "Asistente virtual interactivo desarrollado como proyecto académico",
    images: [asistentevirtual], 
    tags: ["JavaScript", "HTML5", "CSS3", "Web Speech API"],
    features: [
      "Reconocimiento de voz",
      "Interacción conversacional",
      "Respuestas programadas"
    ],
    demoUrl: "https://lab2-fund-web.vercel.app/", 
    
  },
 
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
