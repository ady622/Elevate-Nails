// app/components/FloatingWhatsApp.jsx
'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  // Reemplaza con tu número (sin +). Ej: '51987654321'
  const phoneNumber = '51987654321';
  const message = encodeURIComponent('¡Hola! Estoy interesado/a en sus servicios de manicure.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chatea por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
