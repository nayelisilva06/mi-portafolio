import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
`;

export const IconCard = styled(motion.div)`
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
