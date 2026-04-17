import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../utils/image.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

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
    { label: 'Domicilios', id: 'delivery' },
    { label: 'Ubicación', id: 'location' },
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Mantaro Logo" />
        </motion.div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={styles.navLink}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side: Cart + Mobile toggle + Socials/Ratings */}
        <div className={styles.rightSection}>
          
          {/* Header Social/Rating Links */}
          <div className={styles.headerIcons}>
            <a
              href="https://www.google.com/search?client=opera-gx&hs=dhv&sca_esv=d4c24c2b28f31460&sxsrf=ANbL-n5ak1ZE9DLnWf_lRi740Wb_8Wndhw:1776461140343&q=mantaro+ginebra&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYN3wpy3qjdvT64QxSoAdeDW-dDMAH8EOVo_kSatsNNRGi0jFHJaTOJbqWQU4BxWsnZTyqkC7Ff__IUqA8Xj7bgSlfkD9OmgfLWdpWE_vjFEgmUHsA%3D%3D&sa=X&ved=2ahUKEwjoxei56fWTAxXFTTABHXFTCEYQrrQLegQIGxAA&biw=1324&bih=611&dpr=1#"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconLink} ${styles.iconReview}`}
              title="Déjanos una reseña"
            >
              <Star size={16} fill="currentColor" />
              <span>Califícanos</span>
            </a>
            <a
              href="https://instagram.com/mantaroginebra"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconLink} ${styles.iconIg}`}
              title="Síguenos en Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          {/* Cart Button */}
          <motion.button
            className={styles.cartBtn}
            onClick={() => setIsCartOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span
                className={styles.cartBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                key={cartCount}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu â€” Full overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={styles.mobileMenuInner}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    className={styles.mobileNavLink}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <motion.div 
                    className={styles.mobileIcons}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <a
                      href="https://www.google.com/search?client=opera-gx&hs=dhv&sca_esv=d4c24c2b28f31460&sxsrf=ANbL-n5ak1ZE9DLnWf_lRi740Wb_8Wndhw:1776461140343&q=mantaro+ginebra&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYN3wpy3qjdvT64QxSoAdeDW-dDMAH8EOVo_kSatsNNRGi0jFHJaTOJbqWQU4BxWsnZTyqkC7Ff__IUqA8Xj7bgSlfkD9OmgfLWdpWE_vjFEgmUHsA%3D%3D&sa=X&ved=2ahUKEwjoxei56fWTAxXFTTABHXFTCEYQrrQLegQIGxAA&biw=1324&bih=611&dpr=1#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.iconReview}`}
                      title="Déjanos una reseña"
                    >
                      <Star size={24} fill="currentColor" />
                      <span>Califícanos</span>
                    </a>
                    <a
                      href="https://instagram.com/mantaroginebra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.iconIg}`}
                      title="Síguenos en Instagram"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="5"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                      </svg>
                    </a>
                  </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}




