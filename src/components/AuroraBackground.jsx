import React from "react";
import { motion } from "framer-motion";
import styles from "./AuroraBackground.module.css";

export const AuroraBackground = ({ children }) => {
  return (
    <div className={styles.auroraWrapper}>
      {/* Background Orbs â€” Slow & Ethereal */}
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [-30, 40, -60, -30],
          y: [-30, -60, 30, -30],
          scale: [0.9, 1.15, 1, 0.9],
        }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb3}`}
        animate={{
          x: [60, -30, 40, 60],
          y: [30, 60, -30, 30],
          scale: [1.1, 0.9, 1.05, 1.1],
        }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

      {/* Tribal Pattern â€” Very Subtle */}
      <div className={styles.tribalPattern}></div>

      {/* Noise Texture â€” Barely Visible */}
      <div className={styles.noiseFilter}></div>

      {/* Content */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};


