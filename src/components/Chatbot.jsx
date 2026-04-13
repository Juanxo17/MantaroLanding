import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader } from 'lucide-react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! ☕ Soy tu mesero virtual de Mantaro. Estoy aquí para guiarte en tu pedido.\n\nPara empezar de la forma más rápida y amigable, solo envíame la palabra "Hola" 👇',
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

  const [sessionId] = useState(() => {
    let id = localStorage.getItem('mantaro_session_id');
    if (!id) {
      id = "sess_" + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('mantaro_session_id', id);
    }
    return id;
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5293';
      const response = await fetch(`${apiUrl}/api/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          mensaje: userMessage.content,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.respuesta,
        urlAccion: data.urlAccion,
        textoAccion: data.textoAccion,
        urlSecundaria: data.urlSecundaria,
        textoSecundario: data.textoSecundario
      };

      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Lo siento, no pude conectarme al servidor. Asegúrate de ejecutar el backend.',
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
                    <div className={styles.actionsContainer}>
                      {message.urlAccion && (
                        <a 
                          href={message.urlAccion} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.actionBtn}
                        >
                          {message.textoAccion || 'Haz clic aquí'}
                        </a>
                      )}
                      {message.urlSecundaria && (
                        <a 
                          href={message.urlSecundaria} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                        >
                          {message.textoSecundario || '🌟 Déjanos una reseña'}
                        </a>
                      )}
                    </div>
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
