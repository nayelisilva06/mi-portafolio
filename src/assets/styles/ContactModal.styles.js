import styled from "styled-components";


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.4rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Message = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;