import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('mantaro_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mantaro_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.nombre === item.nombre);
      if (existingItem) {
        return prevItems.map((i) =>
          i.nombre === item.nombre ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prevItems, { ...item, cantidad: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (nombre) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.nombre !== nombre));
  };

  const updateQuantity = (nombre, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(nombre);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((i) => (i.nombre === nombre ? { ...i, cantidad } : i))
    );
  };

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    const match = String(priceStr).match(/[\d\.]+/);
    if (match) {
      return parseFloat(match[0].replace(/\./g, '')) || 0;
    }
    return 0;
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + parsePrice(item.precio) * item.cantidad, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
