import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import styles from './About.module.css';

export default function About() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.textColumn} variants={itemVariants}>
            <BlurText 
              text="¿Quiénes somos?"
              className={styles.title}
              delay={0.1}
              animateBy="words"
              direction="bottom" 
            />
            <p className={styles.description}>
              Somos <strong>Mantaro Ginebra</strong>, un café-restaurante ubicado en el corazón de
              Ginebra, Valle del Cauca. Nuestro espacio es mucho más que un lugar para comer y
              beber; es un santuario de magia, donde la atmósfera envuelve cada momento y la
              calidad impera en cada detalle.
            </p>
            <p className={styles.description}>
              Creemos que la experiencia de compartir una taza de café o un delicioso platillo no
              es solo alimentarse, sino conectar con las personas que nos rodean. Cada producto
              que ofrecemos es seleccionado con cuidado para deleitar tu paladar en una atmósfera
              mágica y acogedora.
            </p>
            <p className={styles.description}>
              Desde nuestras bebidas calientes especiales hasta nuestras pizzas artesanales,
              cada elemento refleja nuestro compromiso con la calidad y la hospitalidad.
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              ¡Visítanos!
            </motion.button>
          </motion.div>

          <motion.div className={styles.imageColumn} variants={imageVariants}>
            <div className={styles.imagePlaceholder}>
              <svg viewBox="0 0 200 200" className={styles.tribalPattern}>
                <defs>
                  <pattern id="tribal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="none" stroke="#C8A96E" strokeWidth="1" />
                    <path d="M20,10 L30,0 L40,10 L30,20 Z" fill="none" stroke="#C8A96E" strokeWidth="1" />
                  </pattern>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#tribal)" />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#C8A96E"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  fill="#C8A96E"
                  fontSize="24"
                  fontWeight="bold"
                >
                </text>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
