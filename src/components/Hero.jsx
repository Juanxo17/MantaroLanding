import React from 'react';
import { motion } from 'framer-motion';
import logo from '../utils/image.png';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/573166677871?text=Hola%20Mantaro%20👋%20quiero%20ver%20el%20menú',
      '_blank'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className={`${styles.hero} wood-texture tribal-pattern`}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className={styles.logoContainer}
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="Mantaro Ginebra" className={styles.logo} />
        </motion.div>

        {/* Slogan */}
        <motion.h1 className={styles.slogan} variants={itemVariants}>
          Deleitar el paladar en una atmósfera mágica ✨
        </motion.h1>

        {/* Schedule */}
        <motion.div className={styles.schedule} variants={itemVariants}>
          <p>
            <span className={styles.scheduleLabel}>Lun–Dom:</span> 9am–10pm
          </p>
          <p className={styles.scheduleWeekend}>
            <span className={styles.scheduleLabel}>Vie–Sáb:</span> 9am–11pm
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className={styles.ctaButtons} variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            onClick={scrollToMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver menú
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            onClick={openWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pedir por WhatsApp
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className={styles.decorElement1}
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={styles.decorElement2}
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
