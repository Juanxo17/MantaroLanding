import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../utils/image.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Menú', id: 'menu' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Pizzas', id: 'menu' },
    { label: 'Domicilios', id: 'delivery' },
    { label: 'Ubicación', id: 'location' },
  ];

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="Mantaro Logo" />
        </motion.div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              className={styles.navLink}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ color: '#F5C518' }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                className={styles.mobileNavLink}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ x: 10 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
