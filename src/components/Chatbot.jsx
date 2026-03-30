import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader } from 'lucide-react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente de Mantaro Ginebra. ¿En qué puedo ayudarte?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/573166677871?text=Hola%20Mantaro,%20quiero%20hacer%20un%20pedido',
      '_blank'
    );
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    // Keep only last 10 messages for context window
    const contextMessages = newMessages.slice(-10);
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 500,
          system: `Eres el asistente virtual de Mantaro Ginebra, un café-restaurante en Ginebra, Valle del Cauca, Colombia. Eres amable, cálido y usas un tono cercano. Respondes en español.

Conoces el menú completo con precios. Si alguien pregunta por un producto, le das el precio y descripción. Si quiere hacer un pedido, le dices que puede hacerlo por WhatsApp al +57 316 667 7871. Los horarios son: lunes a jueves y domingo de 9am a 10pm, viernes y sábado hasta las 11pm. Hacen domicilios a todo Ginebra. El producto nuevo es el Panzerotti, próximamente disponible. No inventes información que no tengas.`,
          messages: contextMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.content[0].text,
      };

      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Lo siento, hubo un error. Por favor, intenta de nuevo o contáctanos por WhatsApp.',
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const shouldShowWhatsAppButton =
    input.toLowerCase().includes('pedir') ||
    input.toLowerCase().includes('domicilio') ||
    input.toLowerCase().includes('pedido');

  return (
    <div className={styles.chatbotContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatPanel}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.header}>
              <h3>Mantaro Ginebra</h3>
              <motion.button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className={styles.messagesContainer}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`${styles.message} ${styles[message.role]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.messageBubble}>
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className={`${styles.message} ${styles.assistant}`}>
                  <div className={styles.messageBubble}>
                    <Loader size={16} className={styles.spinner} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className={styles.inputForm} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className={styles.input}
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                className={styles.sendBtn}
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
              </motion.button>
            </form>

            {shouldShowWhatsAppButton && (
              <motion.button
                className={styles.whatsappBtn}
                onClick={openWhatsApp}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Hacer pedido por WhatsApp
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        className={styles.floatingBtn}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
