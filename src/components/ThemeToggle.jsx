
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.cardBg};
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  position: fixed;
  top: 80px;  
  right: 20px;
  z-index: 1000;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: white;
    transform: scale(1.05);
  }
`;


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      title="Cambiar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </ToggleButton>
  );
};

export default ThemeToggle;
