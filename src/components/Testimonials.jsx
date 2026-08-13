import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={`section-padding bg-light-section ${styles.testimonialsSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>Real results from businesses we've partnered with.</p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              
              <p className={styles.text}>"{testimonial.testimonial}"</p>
              
              <div className={styles.client}>
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name} 
                  className={styles.photo}
                  loading="lazy"
                />
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
