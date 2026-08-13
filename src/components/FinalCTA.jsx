import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  return (
    <section className={`section-padding bg-dark-section ${styles.ctaSection}`}>
      <div className={styles.glow} />
      
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Ready to Build Something Remarkable?</h2>
          <p className={styles.subtitle}>
            Let's turn your idea into a digital experience that makes an impact.
          </p>
          
          <div className={styles.actions}>
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a 
              href="https://wa.me/919000000000"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
