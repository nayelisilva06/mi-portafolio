
import React, { useContext } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaFigma,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";
import { SiGit, SiTypescript } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { SectionTitle, IconCard } from "../assets/styles/Skills.styles";

const categories = {
  "Lenguajes y Frameworks": [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
  ],
  "Herramientas y Tecnologías": [
    { name: "Git / GitHub", icon: <SiGit /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "MySQL / SQL Server", icon: <FaDatabase /> },
  ],
  "Habilidades Blandas": [
    { name: "Trabajo en equipo", icon: <FaUsers /> },
    { name: "Gestión de proyectos", icon: <FaProjectDiagram /> },
    { name: "Resolución de problemas", icon: <FaLightbulb /> },
  ],
};

const Skills = () => {
  const theme = useContext(ThemeContext);
  const iconColor = theme.primary;

  return (
    <Container id="skills" className="py-4">
      <h2 className="mb-3 text-center" style={{ color: iconColor, fontSize: '1.8rem' }}>
        Mis Habilidades
      </h2>

      {Object.entries(categories).map(([category, skills], catIndex) => (
        <div key={catIndex} className="mb-4">
          <SectionTitle>{category}</SectionTitle>
          <Row className="g-3 justify-content-center">
            {skills.map((skill, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <IconCard
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {React.cloneElement(skill.icon, { color: iconColor })}
                  <h5>{skill.name}</h5>
                </IconCard>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Skills;

