import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({
  text = '',
  delay = 0.2,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  const child = {
    hidden: {
      filter: 'blur(6px)',
      opacity: 0,
      y: direction === 'top' ? -20 : 20,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default BlurText;

