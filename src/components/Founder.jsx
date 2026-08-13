import React from 'react';
import { motion } from 'framer-motion';
import founderImg from '../assets/founder.jpg';
import styles from './Founder.module.css';

const Founder = () => {
  return (
    <section id="about" className={`section-padding bg-dark-section ${styles.founderSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.glow} />
              <img 
                src={founderImg} 
                alt="Veeraboina Sai Kumar" 
                className={styles.roundedImage}
                loading="lazy"
              />
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>Full Stack</span>
                  <span className={styles.statValue}>Development</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>Modern Web</span>
                  <span className={styles.statValue}>Technologies</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>REST API</span>
                  <span className={styles.statValue}>Development</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>Production</span>
                  <span className={styles.statValue}>Deployment</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.contentColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>Meet the Founder</h2>
            <h3 className={styles.subtitle}>Veeraboina Sai Kumar</h3>
            <p className={styles.position}>Master of Computer Applications</p>
            
            <div className={styles.story}>
              <p>
                Technology has always been more than a profession for me—it has been a passion for creating solutions that make a real impact. My journey began with a strong foundation in Computer Science, earning a Bachelor of Science (MCCS) degree and later completing a Master of Computer Applications (MCA). Throughout this journey, I developed a deep interest in web technologies, software development, and digital innovation.
              </p>
              <p>
                As a Full Stack Developer, I have worked extensively with modern technologies including React.js, Node.js, JavaScript, Python, SQL, MongoDB, and Firebase. My experience spans designing intuitive user interfaces, developing scalable backend systems, integrating secure payment gateways, building RESTful APIs, and deploying production-ready applications that deliver real value to users.
              </p>
              <p>
                I founded VSK Digital with a clear vision: to help businesses establish a powerful digital presence through modern websites, web applications, and technology-driven solutions. In today's digital world, a website is more than an online brochure—it's a company's first impression, growth engine, and competitive advantage. At VSK Digital, every project is approached with a focus on quality, performance, user experience, and long-term business success.
              </p>
              <p>
                Our mission is to transform ideas into impactful digital experiences that help brands grow, connect with customers, and achieve their goals. Whether it's a startup launching its first website or an established business seeking digital transformation, VSK Digital is committed to delivering solutions that combine creativity, technology, and measurable results.
              </p>
            </div>
            
            <div className={styles.signature}>
              <p className={styles.sigName}>— Veeraboina Sai Kumar</p>
              <p className={styles.sigTitle}>Founder & CEO, VSK Digital</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Founder;
