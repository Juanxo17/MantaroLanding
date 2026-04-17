import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import styles from './About.module.css';

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <BlurText
          text="¿Quiénes somos?"
          className={styles.title}
          delay={0.1}
          animateBy="words"
          direction="bottom"
        />

        <motion.div className={styles.separator} variants={itemVariants}>
          <div className={styles.sepLine} />
          <div className={styles.sepDiamond} />
          <div className={styles.sepLine} />
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          Somos <strong>Mantaro Ginebra</strong>, un café-restaurante ubicado en el corazón de
          Ginebra, Valle del Cauca. Nuestro espacio es mucho más que un lugar para comer y
          beber — es un santuario donde la atmósfera envuelve cada momento y la
          calidad impera en cada detalle.
        </motion.p>

        <motion.p className={styles.description} variants={itemVariants}>
          Cada producto que ofrecemos es seleccionado con cuidado para deleitar tu paladar
          en una atmósfera mágica y acogedora. Desde nuestras bebidas calientes especiales
          hasta nuestras pizzas artesanales, cada elemento refleja nuestro compromiso con
          la calidad y la hospitalidad.
        </motion.p>

        <motion.button
          className="btn btn-secondary"
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() =>
            document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Conócenos
        </motion.button>
      </motion.div>
    </section>
  );
}
