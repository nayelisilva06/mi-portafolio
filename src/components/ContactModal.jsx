import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Overlay = styled.div`
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

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
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

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SubmitButton = styled.button`
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

const Message = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
    const [messageStatus, setMessageStatus] = useState(null);
    const modalRef = useRef();
  
    useEffect(() => {
        if (isOpen) {
          const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
              onClose();
            }
          };
      
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }
      }, [isOpen, onClose]);
      
  
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  
      // Validación en tiempo real 
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { name, email, message } = formData;
      let newErrors = {};
  
      if (!name.trim()) newErrors.name = "El nombre es requerido.";
      if (!email.trim()) {
        newErrors.email = "El correo es requerido.";
      } else if (!isValidEmail(email)) {
        newErrors.email = "El correo no es válido.";
      }
      if (!message.trim()) newErrors.message = "El mensaje es requerido.";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length > 0) return;
  
      emailjs
        .send("service_gmn9kye", "template_nqcymqs", formData, "ydWAaR4f2-cijVsqb")
        .then(
          () => {
            setMessageStatus("¡Mensaje enviado con éxito!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          () => {
            setMessageStatus("Error al enviar el mensaje. Intenta de nuevo.");
          }
        );
    };
  
    if (!isOpen) return null;
  
    return (
      <Overlay>
        <ModalContainer ref={modalRef}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Title>Contáctame</Title>
          <form onSubmit={handleSubmit} noValidate>
            <Label>Nombre</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
  
            <Label>Correo Electrónico</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
  
            <Label>Mensaje</Label>
            <TextArea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
  
            <SubmitButton type="submit">Enviar</SubmitButton>
            {messageStatus && <Message>{messageStatus}</Message>}
          </form>
        </ModalContainer>
      </Overlay>
    );
  };
  
  export default ContactModal;