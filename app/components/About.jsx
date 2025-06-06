// app/components/About.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: customDelay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* ——— Título y párrafos como antes ——— */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          En Elevate Nails Studio nos especializamos en brindar manicuras personalizadas
          que combinan técnicas modernas con un cuidado excepcional. Nuestro equipo de 
          profesionales está capacitado para ofrecerte la mejor experiencia, usando
          productos de alta calidad y diseños exclusivos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Desde estilos clásicos hasta las últimas tendencias, cada manicura es una 
          obra de arte que refleja tu personalidad y resalta la belleza natural de tus uñas. 
          ¡Déjanos elevar tu estilo!
        </motion.p>

        {/* ——— AQUÍ COMIENZAN LAS TRES IMÁGENES ——— */}
        <div className="about-images">
          {[1, 2, 3].map((num, idx) => (
            <motion.div
              className="image-card"
              key={`about-img-${num}`}
              custom={0.4 + idx * 0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
            >
              <Image
                src={`/images/about${num}.jpg`}
                alt={`Imagen ilustrativa ${num}`}
                width={400}
                height={300}
                style={{ borderRadius: '8px' }}
              />
            </motion.div>
          ))}
        </div>
        {/* ——— FIN BLOQUE IMÁGENES ——— */}
      </div>
    </section>
  );
}
