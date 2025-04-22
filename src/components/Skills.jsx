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
import {
  SiGit,
  SiTypescript,
} from "react-icons/si";
import styled, { ThemeContext } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
`;

const IconCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 15px 10px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  margin: 0 5px;

  svg {
    font-size: 32px;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
  }

  h5 {
    margin-top: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(215, 97, 13, 0.61);

    svg {
      transform: scale(1.2);
    }
  }
`;

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
