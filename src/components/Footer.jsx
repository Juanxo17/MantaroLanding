import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';
import logo from '../utils/image.png';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Logo */}
        <motion.div className={styles.logoWrapper} variants={itemVariants}>
          <img src={logo} alt="Mantaro Logo" className={styles.logo} />
        </motion.div>

        {/* Tagline */}
        <motion.p className={styles.tagline} variants={itemVariants}>
          Deleitar el paladar en una atmÃ³sfera mÃ¡gica âœ¨
        </motion.p>

        {/* CTA Buttons â€” Instagram + Google Review */}
        <motion.div className={styles.ctaRow} variants={itemVariants}>
          <a
            href="https://instagram.com/mantaroginebra"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaLink} ${styles.ctaInstagram}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            SÃ­guenos en Instagram
          </a>
          <a
            href="https://www.google.com/search?client=opera-gx&hs=dhv&sca_esv=d4c24c2b28f31460&sxsrf=ANbL-n5ak1ZE9DLnWf_lRi740Wb_8Wndhw:1776461140343&q=mantaro+ginebra&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYN3wpy3qjdvT64QxSoAdeDW-dDMAH8EOVo_kSatsNNRGi0jFHJaTOJbqWQU4BxWsnZTyqkC7Ff__IUqA8Xj7bgSlfkD9OmgfLWdpWE_vjFEgmUHsA%3D%3D&sa=X&ved=2ahUKEwjoxei56fWTAxXFTTABHXFTCEYQrrQLegQIGxAA&biw=1324&bih=611&dpr=1#"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaLink} ${styles.ctaReview}`}
          >
            <Star size={18} />
            DÃ©janos una reseÃ±a
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div className={styles.socialLinks} variants={itemVariants}>
          <a
            href="https://instagram.com/mantaroginebra"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a
            href="https://facebook.com/mantaroginebra"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/573166677871"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </motion.div>

        {/* Compact info */}
        <motion.div className={styles.info} variants={itemVariants}>
          <span>Carrera 1 Calle 5 Esquina, Ginebra</span>
          <span className={styles.dot}>Â·</span>
          <span>Lunâ€“Dom 9amâ€“10pm</span>
        </motion.div>

        {/* Copyright */}
        <motion.p className={styles.copyright} variants={itemVariants}>
          Â© {currentYear} Mantaro Ginebra
        </motion.p>
      </motion.div>
    </footer>
  );
}
