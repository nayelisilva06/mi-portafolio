
import { createGlobalStyle } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#333333",
  primary: "#FF6B00",
  secondary: "#FF8C42",
  cardBg: "#f8f9fa",
  progressBg: "#f0f0f0",
};


const darkTheme = {
  background: "#121212",
  text: "#f0f0f0",  
  primary: "#FF8C42", 
  secondary: "#FFAA6B",
  cardBg: "#1E1E1E", 
  statBg: "#252525",  
};

export { lightTheme, darkTheme };

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.primary};
  }
  
  .text-primary {
    color: ${({ theme }) => theme.primary} !important;
  }
  
  .btn-primary {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
      border-color: ${({ theme }) => theme.secondary};
    }
  }
  
  .progress {
    background-color: ${({ theme }) => theme.progressBg};
    height: 8px;
    border-radius: 4px;
    
    .progress-bar {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;