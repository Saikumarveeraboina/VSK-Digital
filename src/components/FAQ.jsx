import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "What services does VSK Digital provide?",
    answer: "We specialize in Website Development, Web Application Development, Full-Stack Development, API & Backend Development, and overall Digital Transformation solutions."
  },
  {
    question: "What type of businesses do you work with?",
    answer: "We work with startups, entrepreneurs, small businesses, and established companies looking to improve their digital presence and operational efficiency."
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes, we build 100% custom websites tailored to your specific business requirements, brand identity, and target audience. We do not use generic templates."
  },
  {
    question: "Do you build web applications?",
    answer: "Absolutely. We develop complex, scalable web applications with custom frontend interfaces and robust backend architectures."
  },
  {
    question: "What technologies do you use?",
    answer: "We utilize modern technologies including React.js, JavaScript, Node.js, Python, SQL, MongoDB, Firebase, and various REST API integrations."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes, we can analyze your current website, identify areas for improvement in design, performance, and user experience, and completely revamp it."
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support to ensure your digital products remain secure, fast, and up-to-date with the latest technologies."
  },
  {
    question: "How do I start a project?",
    answer: "You can start a project by filling out the contact form on this website, sending us an email, or messaging us directly on WhatsApp. We'll schedule a discovery call to discuss your needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`section-padding bg-dark-section ${styles.faqSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know about our services and process.</p>
        </motion.div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button 
                className={`${styles.questionBtn} ${activeIndex === index ? styles.activeBtn : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.question}>{faq.question}</span>
                <ChevronDown 
                  className={`${styles.icon} ${activeIndex === index ? styles.activeIcon : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
