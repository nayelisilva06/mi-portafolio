import React, { useState, useRef, useEffect } from "react";
import { Overlay,ModalContainer, CloseButton, Title, Label, Input, TextArea, SubmitButton, ErrorText, Message  } from "../assets/styles/ContactModal.styles";
import emailjs from "@emailjs/browser";

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