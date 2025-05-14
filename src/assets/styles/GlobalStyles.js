import { createGlobalStyle } from "styled-components";


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