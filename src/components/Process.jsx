import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand the business, audience, goals, and requirements."
  },
  {
    num: "02",
    title: "Strategize",
    description: "Define the solution, structure, features, and technology."
  },
  {
    num: "03",
    title: "Build",
    description: "Design, develop, test, and optimize the digital experience."
  },
  {
    num: "04",
    title: "Launch",
    description: "Deploy the solution and prepare it for real users."
  },
  {
    num: "05",
    title: "Grow",
    description: "Improve performance, functionality, and digital presence over time."
  }
];

const Process = () => {
  return (
    <section id="process" className={`section-padding bg-dark-section ${styles.processSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>From Idea to Impact</h2>
          <p className={styles.subtitle}>Our proven process for delivering digital excellence.</p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.stepNumber}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
