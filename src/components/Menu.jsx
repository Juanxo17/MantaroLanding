import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';import BlurText from './BlurText';import { menu, categories } from '../data/menu';
import styles from './Menu.module.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('bebidasCalientes');

  const currentItems = menu[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <BlurText 
          text="Nuestro Menú" 
          className={styles.title} 
          delay={0.15} 
          animateBy="letters" 
          direction="top" 
        />

        {/* Category Tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`${styles.tab} ${activeCategory === category.key ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.itemsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={`${item.nombre}-${index}`}
                className={styles.card}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.itemName}>{item.nombre}</h3>
                  {item.descripcion && (
                    <p className={styles.itemDescription}>{item.descripcion}</p>
                  )}
                  <p className={styles.itemPrice}>{item.precio} COP</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
