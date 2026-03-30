import React from 'react';
import { motion } from 'framer-motion';
import styles from './Panzerotti.module.css';

export default function Panzerotti() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/573166677871?text=Hola%20Mantaro,%20quiero%20saber%20más%20sobre%20el%20Panzerotti',
      '_blank'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.panzerotti}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          ⭐ Nuevo: Panzerotti
        </motion.h2>

        <motion.p className={styles.description} variants={itemVariants}>
          Nuestro más reciente producto estrella. Una experiencia culinaria única que combina
          tradición italiana con los sabores que amamos. Próximamente disponible.
        </motion.p>

        <motion.div className={styles.imagePlaceholder} variants={itemVariants}>
          <div className={styles.placeholderContent}>
            <span className={styles.emoji}></span>
            <p>Próximamente</p>
          </div>
        </motion.div>

        <motion.button
          className="btn btn-gold"
          onClick={openWhatsApp}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quiero saber más
        </motion.button>
      </motion.div>
    </section>
  );
}
