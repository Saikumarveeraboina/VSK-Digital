import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundElements}>
        <div className={styles.glow} />
        <div className={styles.grid} />
        
        {/* CSS 3D Abstract Elements */}
        <div className={styles.shapesContainer}>
          <div className={`${styles.shape} ${styles.shape1}`} />
          <div className={`${styles.shape} ${styles.shape2}`} />
          <div className={`${styles.shape} ${styles.shape3}`} />
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Premium Digital Agency
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Ideas Into <br />
            <span className="text-gradient">Powerful Digital Experiences</span>
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            VSK Digital builds modern websites, web applications, and technology solutions that help businesses establish a stronger digital presence and grow with confidence.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn-secondary">
              Explore Our Work
            </a>
            <a 
              href="https://wa.me/919000000000?text=Hi%20VSK%20Digital,%20I'm%20interested%20in%20your%20services.%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappBtn}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
