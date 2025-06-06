// app/components/Navbar.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  // Estado para detectar si la página se ha scrolleado (para asignar la clase "scrolled")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si scrollY > 20px, mostramos la variante con sombra
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Vinculamos el listener al evento scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Ubícanos', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container">
          {/* Logo con animación de entrada */}
          <motion.div
            className="nav-logo btn-hover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#home">
              <Image
                src="/images/logo-horizontal.png"
                alt="Elevate Nails Studio"
                width={100}
                height={100}
                priority
              />
            </a>
          </motion.div>

          {/* Enlaces de navegación */}
          <div className="nav-links">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="btn-hover"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
