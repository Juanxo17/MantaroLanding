import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import SplitText from './SplitText';
import logo from '../utils/image.png';
import styles from './Hero.module.css';

// Floating particles component
function GoldenParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      duration: 12 + Math.random() * 20,
      delay: Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.35,
    })),
    []
  );

  return (
    <div className={styles.particles}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15 * (p.id % 2 === 0 ? 1 : -1), 0],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/573166677871?text=${encodeURIComponent('Hola Mantaro 👋 quiero ver el menú')}`,
      '_blank'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Golden Particles */}
      <GoldenParticles />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo with glow */}
        <motion.div
          className={styles.logoContainer}
          variants={logoVariants}
        >
          <div className={styles.logoGlow} />
          <img src={logo} alt="Mantaro Ginebra" className={styles.logo} />
        </motion.div>

        {/* Slogan â€” animated letter by letter */}
        <motion.div variants={itemVariants}>
          <SplitText
            text="Deleitar el paladar en una atmósfera mágica"
            className={styles.slogan}
            delay={40}
          />
        </motion.div>

        {/* Schedule â€” subtle */}
        <motion.div className={styles.schedule} variants={itemVariants}>
          <span>Lun–Dom 9am–10pm</span>
          <span className={styles.scheduleDot}>·</span>
          <span>Vie–Sáb 9am–11pm</span>
        </motion.div>

        {/* CTA */}
        <motion.div className={styles.ctaSection} variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            onClick={scrollToMenu}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Ver menú
          </motion.button>
          <motion.button className={styles.whatsappLink} onClick={openWhatsApp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <MessageCircle size={18} />
            o pide por WhatsApp &rarr;
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}



