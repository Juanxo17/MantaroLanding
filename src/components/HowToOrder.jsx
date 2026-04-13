import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, MessageCircle, Smartphone } from 'lucide-react';
import BlurText from './BlurText';
import styles from './HowToOrder.module.css';

export default function HowToOrder() {
  const steps = [
    {
      icon: <Coffee size={32} />,
      title: "1. Elige tu antojo",
      desc: "Explora nuestro menú y toca el botón '+' para armar tu carrito de compras."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "2. O pide por el Chat",
      desc: "Toca el ícono de mensajes de la esquina, escribe 'Hola' y responde con un número. ¡Fácil y rápido!"
    },
    {
      icon: <Smartphone size={32} />,
      title: "3. Listo en WhatsApp",
      desc: "Todo se enviará limpio y ordenado a nuestro WhatsApp oficial para prepararlo de inmediato."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.section} id="como-pedir">
      <div className={styles.container}>
        <div className={styles.header}>
          <BlurText 
            text="¿Cómo hacer tu pedido?" 
            className={styles.title} 
            delay={0.1} 
            animateBy="words" 
            direction="top" 
          />
          <p className={styles.subtitle}>Sin complicaciones, directo al grano.</p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}