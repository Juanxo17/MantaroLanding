import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import logo from '../utils/image.png';
import styles from './Chatbot.module.css';

// Typing dots indicator
function TypingDots() {
  return (
    <div className={styles.typingDots}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={styles.dot}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Â¡Hola! â˜• Soy tu mesero virtual de Mantaro. Estoy aquÃ­ para guiarte en tu pedido.\n\nPara empezar de la forma mÃ¡s rÃ¡pida y amigable, solo envÃ­ame la palabra "Hola" ðŸ‘‡',
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
        content: 'Lo siento, no pude conectarme al servidor. AsegÃºrate de ejecutar el backend.',
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
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <img src={logo} alt="Mantaro" className={styles.headerLogo} />
                <div>
                  <h3>Mesero Virtual</h3>
                  <span className={styles.headerStatus}>â˜• En lÃ­nea</span>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.messagesContainer}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`${styles.message} ${styles[message.role]}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                          {message.textoAccion || 'Haz clic aquÃ­'}
                        </a>
                      )}
                      {message.urlSecundaria && (
                        <a
                          href={message.urlSecundaria}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                        >
                          {message.textoSecundario || 'ðŸŒŸ DÃ©janos una reseÃ±a'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className={`${styles.message} ${styles.assistant}`}>
                  <div className={styles.messageBubble}>
                    <TypingDots />
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
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={isLoading || !input.trim()}
              >
                <Send size={16} />
              </button>
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

      {/* Floating Button with Pulse */}
      <motion.button
        className={styles.floatingBtn}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      >
        {!isOpen && <span className={styles.pulse} />}
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
