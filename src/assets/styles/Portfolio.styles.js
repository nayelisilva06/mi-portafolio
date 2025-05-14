import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const PortfolioContainer = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const StyledCard = styled(Card)`
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

export const ProjectImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TagBadge = styled.span`
  background-color: ${({ theme }) => theme.primary} !important;
  color: white !important;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  display: inline-block;
`;

export const ProjectCarousel = styled(Carousel)`
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
export const OrangeButton = styled(Button).attrs({
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