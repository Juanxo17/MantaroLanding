import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, MessageCircle, Smartphone } from 'lucide-react';
import BlurText from './BlurText';
import styles from './HowToOrder.module.css';

export default function HowToOrder() {
  const steps = [
    {
      icon: <Coffee size={28} />,
      number: '01',
      title: 'Elige tu antojo',
      desc: "Explora nuestro menú y toca el botón '+' para armar tu pedido.",
    },
    {
      icon: <MessageCircle size={28} />,
      number: '02',
      title: 'O pide por el Chat',
      desc: "Toca el í­cono de mensajes, escribe 'Hola' y sigue las instrucciones.",
    },
    {
      icon: <Smartphone size={28} />,
      number: '03',
      title: 'Listo en WhatsApp',
      desc: 'Todo se enví­a limpio y ordenado a nuestro WhatsApp para prepararlo.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
          <p className={styles.subtitle}>Simple, rápido y sin complicaciones.</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div className={styles.card} variants={itemVariants}>
                <span className={styles.bgNumber}>{step.number}</span>
                <div className={styles.iconWrapper}>
                  {step.icon}
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </motion.div>
              {/* Connector line between cards (not after last) */}
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine} />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

