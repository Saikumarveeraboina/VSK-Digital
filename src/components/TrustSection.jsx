import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorSmartphone, Zap, TrendingUp } from 'lucide-react';
import styles from './TrustSection.module.css';

const features = [
  {
    title: "Modern Technology",
    description: "We use modern development technologies and scalable architectures to create maintainable digital solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Design",
    description: "Every experience is designed to work beautifully across desktops, tablets, and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Focused",
    description: "Fast loading, optimized assets, efficient code, and smooth interactions are treated as core requirements.",
    icon: Zap,
  },
  {
    title: "Scalable Solutions",
    description: "Build today with the flexibility to evolve as your business grows.",
    icon: TrendingUp,
  }
];

const TrustSection = () => {
  return (
    <section className={`section-padding bg-light-section ${styles.trustSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Built for Businesses That Think Bigger</h2>
          <p className={styles.subtitle}>
            We combine modern technology, thoughtful design, and performance-focused development to create digital experiences built for real business goals.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
