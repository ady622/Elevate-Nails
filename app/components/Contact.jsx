// app/components/Contact.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

export default function Contact() {
  // Animación para cada ítem con pequeño retraso
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="contact" className="section py-12">
      <div className="container mx-auto px-4">
        {/* —————— TÍTULO Y SUBTÍTULO —————— */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-semibold mb-2"
          style={{ color: 'var(--color-capuchino)' }}
        >
          Ubícanos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-base mb-8"
          style={{ color: 'var(--color-texto)' }}
        >
          Visítanos en nuestra ubicación y contáctanos vía teléfono o correo.
        </motion.p>

        {/* —————— CONTENEDOR FLEX (MAPA + DETALLES) —————— */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* —————— COLUMNA DEL MAPA —————— */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Ubicación Elevate Nails Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.565324529147!2d-75.73009705792775!3d-14.06461082720515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3b72ebce8a5%3A0xafe38b0c6057b647!2sElevate%20Nails%20Studio!5e1!3m2!1ses!2spe!4v1749158255090!5m2!1ses!2spe"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* —————— COLUMNA DE DETALLES DE CONTACTO —————— */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <motion.div
              className="flex items-center space-x-13 text-base"
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <FaMapMarkerAlt
                className="w-5 h-5"
                style={{ color: 'var(--color-capuchino)' }}
              />
              <span style={{ color: 'var(--color-texto)' }}>
                Calle Falsa 123, Miraflores, Lima – Perú
              </span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3 text-base"
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <FaPhoneAlt
                className="w-5 h-5"
                style={{ color: 'var(--color-capuchino)' }}
              />
              <a
                href="tel:+51987654321"
                className="hover:underline"
                style={{ color: 'var(--color-texto)' }}
              >
                +51 987 654 321
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3 text-base"
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <FaEnvelope
                className="w-5 h-5"
                style={{ color: 'var(--color-capuchino)' }}
              />
              <a
                href="mailto:info@elevatenails.com"
                className="hover:underline"
                style={{ color: 'var(--color-texto)' }}
              >
                info@elevatenails.com
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3 text-base"
              custom={0.7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              {/* Si deseas agregar más ítems (p.ej. horario de atención) */}
              <FaInfoCircle
                className="w-5 h-5"
                style={{ color: 'var(--color-capuchino)' }}
              />
              <span style={{ color: 'var(--color-texto)' }}>
                Horario: Lun – Vie: 09:00 – 18:00
              </span>
            </motion.div>
          </div>
        </div>
        {/* —————— FIN CONTENEDOR FLEX —————— */}
      </div>
    </section>
  );
}
