// app/components/Footer.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Elevate Nails Studio. Todos los derechos reservados.
      </motion.p>
    </footer>
  );
}
