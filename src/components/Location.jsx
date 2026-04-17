import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Location.module.css';

export default function Location() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const infoCards = [
    {
      icon: <MapPin size={22} strokeWidth={1.5} />,
      title: 'Dirección',
      content: (
        <>
          Carrera 1 Calle 5 Esquina<br />
          Ginebra, Valle del Cauca<br />
          Colombia
        </>
      ),
    },
    {
      icon: <Clock size={22} strokeWidth={1.5} />,
      title: 'Horarios',
      content: (
        <>
          <strong>Lun–Jue y Dom:</strong> 9am–10pm<br />
          <strong>Vie–Sáb:</strong> 9am–11pm
        </>
      ),
    },
    {
      icon: <Phone size={22} strokeWidth={1.5} />,
      title: 'Contacto',
      content: (
        <>
          <strong>WhatsApp:</strong> +57 316 667 7871<br />
          <strong>Instagram:</strong> @mantaroginebra
        </>
      ),
    },
  ];

  return (
    <section className={styles.location} id="location">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Ubicación
        </motion.h2>

        {/* Google Maps */}
        <motion.div className={styles.mapContainer} variants={itemVariants}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7831852484063!2d-76.26890842346865!3d3.725415269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30ae66d5e5e5e5%3A0x5e5e5e5e5e5e5e!2sCarrera%201%2C%20Ginebra%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1234567890"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mantaro Ginebra Location"
          />
        </motion.div>

        {/* Info Cards */}
        <div className={styles.infoContainer}>
          {infoCards.map((card, i) => (
            <motion.div key={i} className={styles.infoCard} variants={itemVariants}>
              <div className={styles.infoIcon}>{card.icon}</div>
              <h3 className={styles.infoTitle}>{card.title}</h3>
              <p className={styles.infoText}>{card.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



