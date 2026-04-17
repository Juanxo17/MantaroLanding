import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bike } from 'lucide-react';
import styles from './Delivery.module.css';

export default function Delivery() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/573166677871?text=Hola%20Mantaro,%20quiero%20hacer%20un%20pedido%20a%20domicilio',
      '_blank'
    );
  };

  return (
    <section className={styles.delivery} id="delivery">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className={styles.iconWrapper}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Bike size={36} strokeWidth={1.5} />
        </motion.div>

        <h2 className={styles.title}>
          Domicilios a todo Ginebra
        </h2>

        <p className={styles.description}>
          Disfruta nuestros sabores desde la comodidad de tu hogar.
        </p>

        <motion.button
          className={`btn btn-whatsapp ${styles.ctaButton}`}
          onClick={openWhatsApp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <MessageCircle size={20} />
          Pedir por WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
}


