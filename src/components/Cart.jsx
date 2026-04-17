import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [notas, setNotas] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('mesa'); // 'mesa' o 'domicilio'
  const [detalleEntrega, setDetalleEntrega] = useState('');

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    const match = String(priceStr).match(/[\d\.]+/);
    if (match) {
      return parseFloat(match[0].replace(/\./g, '')) || 0;
    }
    return 0;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    if (!detalleEntrega.trim()) {
      alert(`Por favor ingresa ${tipoEntrega === 'mesa' ? 'tu nÃºmero de mesa' : 'tu direcciÃ³n para el domicilio'}.`);
      return;
    }

    let message = 'Â¡Hola Mantaro! Quiero hacer el siguiente pedido:\n\n';
    
    // Info de entrega
    message += `*Tipo de entrega:* ${tipoEntrega === 'mesa' ? 'En el Local' : 'Domicilio'}\n`;
    message += `*${tipoEntrega === 'mesa' ? 'Mesa' : 'DirecciÃ³n'}:* ${detalleEntrega}\n\n`;

    cartItems.forEach((item) => {
      const price = parsePrice(item.precio);
      message += `- ${item.cantidad}x ${item.nombre} ($${price * item.cantidad})\n`;
    });

    message += `\n*TOTAL: $${cartTotal}*`;

    if (notas.trim()) {
      message += `\n\n*Aclaraciones:* ${notas.trim()}`;
    }

    const whatsappUrl = `https://wa.me/573166677871?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setNotas('');
    setDetalleEntrega('');
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            className={styles.cartSidebar}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <ShoppingBag size={24} />
                <h2>Tu Pedido</h2>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsCartOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className={styles.cartBody}>
              {cartItems.length === 0 ? (
                <div className={styles.emptyCart}>
                  <ShoppingBag size={48} className={styles.emptyIcon} />
                  <p>Tu carrito estÃ¡ vacÃ­o</p>
                  <button
                    className={styles.continueBtn}
                    onClick={() => setIsCartOpen(false)}
                  >
                    Ver MenÃº
                  </button>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.nombre}
                      className={styles.cartItem}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <div className={styles.itemInfo}>
                        <h4>{item.nombre}</h4>
                        <p className={styles.price}>${parsePrice(item.precio)} c/u</p>
                      </div>

                      <div className={styles.quantityControls}>
                        <button
                          onClick={() => updateQuantity(item.nombre, item.cantidad - 1)}
                          className={styles.qtyBtn}
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.qty}>{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.nombre, item.cantidad + 1)}
                          className={styles.qtyBtn}
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.nombre)}
                          className={styles.deleteBtn}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Textarea para notas */}
                  <div className={styles.notesContainer}>
                    <label htmlFor="cart-notes">Aclaraciones (sabores, tamaÃ±os, sin azÃºcar...)</label>
                    <textarea
                      id="cart-notes"
                      className={styles.notesInput}
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      placeholder="Ej: La torta es de zanahoria..."
                      rows="3"
                    />
                  </div>

                  {/* ConfiguraciÃ³n de entrega */}
                  <div className={styles.deliveryConfig}>
                    <p className={styles.deliveryLabel}>Â¿DÃ³nde vas a disfrutar tu pedido?</p>
                    <div className={styles.deliveryOptions}>
                      <button
                        className={tipoEntrega === 'mesa' ? styles.deliveryActive : styles.deliveryBtn}
                        onClick={() => setTipoEntrega('mesa')}
                      >
                        En el local (Mesa)
                      </button>
                      <button
                        className={tipoEntrega === 'domicilio' ? styles.deliveryActive : styles.deliveryBtn}
                        onClick={() => setTipoEntrega('domicilio')}
                      >
                        Domicilio
                      </button>
                    </div>

                    <div className={styles.deliveryDetails}>
                      {tipoEntrega === 'mesa' ? (
                        <>
                          <label htmlFor="mesa">NÃºmero de Mesa</label>
                          <input
                            id="mesa"
                            type="text"
                            className={styles.notesInput}
                            placeholder="Ej: Mesa 3"
                            value={detalleEntrega}
                            onChange={(e) => setDetalleEntrega(e.target.value)}
                          />
                        </>
                      ) : (
                        <>
                          <label htmlFor="direccion">DirecciÃ³n de EnvÃ­o</label>
                          <input
                            id="direccion"
                            type="text"
                            className={styles.notesInput}
                            placeholder="Ej: Calle 4 #12-34, Barrio Centro"
                            value={detalleEntrega}
                            onChange={(e) => setDetalleEntrega(e.target.value)}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.footer}>
              <div className={styles.totalContainer}>
                <span>Total estimado:</span>
                <span className={styles.totalPrice}>${cartTotal}</span>
              </div>
              
              <motion.button
                className={styles.checkoutBtn}
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Pedir por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
