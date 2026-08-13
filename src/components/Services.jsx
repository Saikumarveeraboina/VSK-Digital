import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="services" className={`section-padding bg-dark-section ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Digital Solutions That Move Your Business Forward</h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardNumber}>
                {String(service.id).padStart(2, '0')}
              </div>
              <div className={styles.iconWrapper}>
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.learnMore}>Learn more</span>
                <ArrowRight className={styles.arrow} size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
