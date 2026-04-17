import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import BlurText from './BlurText';
import { menu, categories } from '../data/menu';
import { useCart } from '../context/CartContext';
import styles from './Menu.module.css';

const categoryEmojis = {
  bebidasCalientes: '☕',
  bebidasFrias: '🧊',
  pizzas: '🍕',
  brunch: '🥐',
  endulzate: '🍰',
  licores: '🍷',
};

const MenuItemCard = ({ item, itemVariants }) => {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState(0);

  const hasMultipleOptions = item.precio.includes('/');
  const prices = hasMultipleOptions ? item.precio.split('/').map(p => p.trim()) : [item.precio];

  let options = [];
  if (hasMultipleOptions) {
    const descs = item.descripcion && item.descripcion.includes('/')
      ? item.descripcion.split('/').map(d => d.trim())
      : ['Normal', 'Grande'];

    const names = item.nombre.includes('/')
      ? item.nombre.split('/').map(n => n.trim())
      : [];

    options = prices.map((price, i) => {
      const optName = names[i] || item.nombre;
      const optDesc = descs[i] || `Opción ${i + 1}`;
      return { price, name: optName, desc: names.length > 0 ? '' : optDesc };
    });
  }

  const handleAdd = () => {
    if (!hasMultipleOptions) {
      addToCart(item);
    } else {
      const option = options[selectedOption];
      const tailoredItem = {
        ...item,
        nombre: item.nombre.includes('/') ? option.name : `${item.nombre} - ${option.desc}`,
        precio: option.price,
        descripcion: option.desc,
      };
      addToCart(tailoredItem);
    }
  };

  return (
    <motion.div
      className={styles.card}
      variants={itemVariants}
      whileHover={{ y: -3 }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.itemName}>{item.nombre}</h3>
          {!hasMultipleOptions && (
            <span className={styles.itemPrice}>${item.precio}</span>
          )}
        </div>

        {item.descripcion && !hasMultipleOptions && (
          <p className={styles.itemDescription}>{item.descripcion}</p>
        )}

        {hasMultipleOptions ? (
          <div className={styles.variantSelector}>
            <div className={styles.variantPills}>
              {options.map((opt, i) => (
                <button
                  key={i}
                  className={`${styles.variantPill} ${selectedOption === i ? styles.variantActive : ''}`}
                  onClick={() => setSelectedOption(i)}
                >
                  <span className={styles.variantLabel}>
                    {opt.name !== item.nombre ? opt.name : opt.desc}
                  </span>
                  <span className={styles.variantPrice}>${opt.price}</span>
                </button>
              ))}
            </div>
            <motion.button
              className={styles.addBtn}
              onClick={handleAdd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
            >
              <Plus size={18} />
            </motion.button>
          </div>
        ) : (
          <div className={styles.cardFooter}>
            <motion.button
              className={styles.addBtn}
              onClick={handleAdd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
            >
              <Plus size={18} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('bebidasCalientes');

  const currentItems = menu[activeCategory] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  };

  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <BlurText
          text="Nuestro Menú"
          className={styles.title}
          delay={0.12}
          animateBy="letters"
          direction="top"
        />

        {/* Category Tabs — Pill selector */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.tab} ${activeCategory === category.key ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className={styles.tabEmoji}>{categoryEmojis[category.key]}</span>
              {category.label}
              {activeCategory === category.key && (
                <motion.div
                  className={styles.tabIndicator}
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
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
            exit="exit"
          >
            {currentItems.map((item, index) => (
              <MenuItemCard
                key={`${item.nombre}-${index}`}
                item={item}
                itemVariants={itemVariants}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
