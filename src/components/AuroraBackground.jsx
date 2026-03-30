import React from "react";
import { motion } from "framer-motion";
import styles from "./AuroraBackground.module.css";

export const AuroraBackground = ({ children }) => {
  return (
    <div className={styles.auroraWrapper}>
      {/* Background Orbs */}
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [-50, 50, -100, -50],
          y: [-50, -100, 50, -50],
          scale: [0.8, 1.3, 1, 0.8],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb3}`}
        animate={{
          x: [100, -50, 50, 100],
          y: [50, 100, -50, 50],
          scale: [1.2, 0.9, 1.1, 1.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Tribal Pattern Texture */}
      <div className={styles.tribalPattern}></div>

      {/* Noise Texture (Sutil) */}
      <div className={styles.noiseFilter}></div>

      {/* Content */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
