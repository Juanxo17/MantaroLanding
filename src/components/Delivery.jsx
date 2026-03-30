import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from './Delivery.module.css';

export default function Delivery() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/573166677871?text=Hola%20Mantaro,%20quiero%20hacer%20un%20pedido%20a%20domicilio',
      '_blank'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.delivery} id="delivery">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hacemos domicilios a todo Ginebra
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ¡Disfruta de nuestros sabores desde la comodidad de tu hogar!
        </motion.p>

        <motion.button
          className={`btn btn-whatsapp ${styles.ctaButton}`}
          onClick={openWhatsApp}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MessageCircle size={24} />
          Pedir por WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
}
