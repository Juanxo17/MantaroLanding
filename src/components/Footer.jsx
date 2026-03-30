import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Share2, MessageCircle } from 'lucide-react';
import logo from '../utils/image.png';
import styles from './Footer.module.css';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo Section */}
        <motion.div className={styles.section} variants={itemVariants}>
          <div className={styles.logoSmall}>
            <img src={logo} alt="Mantaro Logo" />
          </div>
          <p className={styles.tagline}>Deleitar el paladar en una atmósfera mágica.</p>
        </motion.div>

        {/* Hours Section */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>Horarios</h3>
          <p className={styles.text}>
            <strong>Lun–Jue y Dom:</strong> 9am–10pm
          </p>
          <p className={styles.text}>
            <strong>Vie–Sáb:</strong> 9am–11pm
          </p>
        </motion.div>

        {/* Address Section */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>Dirección</h3>
          <p className={styles.text}>
            Carrera 1 Calle 5 Esquina
            <br />
            Ginebra, Valle del Cauca
            <br />
            Colombia
          </p>
        </motion.div>

        {/* Social Section */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>Síguenos</h3>
          <div className={styles.socialLinks}>
            <motion.a
              href="https://instagram.com/mantaroginebra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={styles.socialLink}
              title="Instagram"
            >
              <Share2 size={24} />
            </motion.a>
            <motion.a
              href="https://facebook.com/mantaroginebra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={styles.socialLink}
              title="Facebook"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/573166677871"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={styles.socialLink}
              title="WhatsApp"
            >
              <MessageCircle size={24} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className={styles.bottomBar}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className={styles.copyright}>
          © {currentYear} Mantaro Ginebra. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
