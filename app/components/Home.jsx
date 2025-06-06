// app/components/Home.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container home-content">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bienvenid@ a Elevate Nails Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Elevamos tu estilo con manicuras de vanguardia. Calidad, elegancia y confort en cada detalle.
        </motion.p>
        <motion.button
          className="cta-button"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => {
            const el = document.getElementById('about');
            if (el) {
              window.scrollTo({
                top: el.offsetTop - 60,
                behavior: 'smooth',
              });
            }
          }}
        >
          Conócenos
        </motion.button>
      </div>
    </section>
  );
}
