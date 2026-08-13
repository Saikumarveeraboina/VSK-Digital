import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';
import styles from './Technologies.module.css';

const Technologies = () => {
  return (
    <section className={`section-padding bg-light-section ${styles.techSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Powered by Modern Technology</h2>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={styles.name}>{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
