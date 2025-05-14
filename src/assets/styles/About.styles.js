import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const ServiceCard = styled.div`
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

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

export const SectionSubtitle = styled.h3`
  text-align: center;
  margin-bottom: 60px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 1.4rem;
`;