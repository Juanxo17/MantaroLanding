import { motion } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center',
}) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay / 1000, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: { ...animationTo, transition: { type: 'spring', damping: 12, stiffness: 100 } },
    hidden: animationFrom,
  };

  return (
    <motion.h1
      className={className}
      style={{ textAlign, overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: rootMargin, amount: threshold }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

export default SplitText;

