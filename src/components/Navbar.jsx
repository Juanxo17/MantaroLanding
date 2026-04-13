import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, X, ShoppingBag, Star } from 'lucide-react';
import logo from '../utils/image.png';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Menú', id: 'menu', key: 'menu' },
    { label: 'Nosotros', id: 'about', key: 'about' },
    { label: 'Pizzas', id: 'menu', key: 'pizzas' },
    { label: 'Domicilios', id: 'delivery', key: 'delivery' },
    { label: 'Ubicación', id: 'location', key: 'location' },
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
              key={link.key}
              className={styles.navLink}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ color: '#F5C518' }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
          
          <motion.a
            href="https://www.google.com/search?client=opera-gx&hs=MGp&sca_esv=2f8518efab07fb93&sxsrf=ANbL-n6SXtPRg7cgboe5k_UisN6HzFrquQ:1776118626721&q=caf%C3%A9+mantaro+ginebra&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYN3wpy3qjdvT64QxSoAdeCNqLZTB9tNPlJIElSpc_7gkdPm7GL9heEH5USLiImEE0yIpxXXsMKgJGsaGDw07BVtFeK9-QTB7GH8TclXLUYks6j6aw%3D%3D&sa=X&ved=2ahUKEwivisy-7euTAxW0QzABHaESHD4QrrQLegQIGhAA&biw=1324&bih=611&dpr=1#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleReviewBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star size={18} />
            <span className={styles.igText}>Califícanos</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/mantaroginebra/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramIcon />
            <span className={styles.igText}>Síguenos</span>
          </motion.a>

          <motion.button
            className={styles.cartButton}
            onClick={() => setIsCartOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <motion.span 
                className={styles.cartBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={cartCount}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className={styles.mobileControls}>
          <motion.a
            href="https://www.google.com/search?client=opera-gx&hs=MGp&sca_esv=2f8518efab07fb93&sxsrf=ANbL-n6SXtPRg7cgboe5k_UisN6HzFrquQ:1776118626721&q=caf%C3%A9+mantaro+ginebra&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYN3wpy3qjdvT64QxSoAdeCNqLZTB9tNPlJIElSpc_7gkdPm7GL9heEH5USLiImEE0yIpxXXsMKgJGsaGDw07BVtFeK9-QTB7GH8TclXLUYks6j6aw%3D%3D&sa=X&ved=2ahUKEwivisy-7euTAxW0QzABHaESHD4QrrQLegQIGhAA&biw=1324&bih=611&dpr=1#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleReviewBtn}
            whileTap={{ scale: 0.95 }}
          >
            <Star size={18} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/mantaroginebra/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramBtn}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramIcon />
          </motion.a>

          <motion.button
            className={styles.mobileCartBtn}
            onClick={() => setIsCartOpen(true)}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className={styles.cartBadgeMobile}>{cartCount}</span>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </motion.button>
        </div>

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
                key={link.key}
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
