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
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
        {/* Shimmer badge */}
        <motion.div className={styles.badge} variants={itemVariants}>
          <span className={styles.badgeText}>✨ NUEVO</span>
          <div className={styles.badgeShine} />
        </motion.div>

        <motion.h2 className={styles.title} variants={itemVariants}>
          Panzerotti
        </motion.h2>

        <motion.p className={styles.description} variants={itemVariants}>
          Nuestro más reciente producto estrella. Una experiencia culinaria única que combina
          tradición italiana con los sabores que amamos. Próximamente disponible.
        </motion.p>

        <motion.button
          className={`btn btn-gold ${styles.ctaBtn}`}
          onClick={openWhatsApp}
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Quiero saber más
        </motion.button>
      </motion.div>
    </section>
  );
}



