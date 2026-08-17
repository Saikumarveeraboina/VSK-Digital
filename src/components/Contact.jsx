import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    whatsapp: '',
    service: '',
    budget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData(e.target);

    formDataToSend.append(
      'access_key',
      '8e39dea4-f7fb-4361-82e6-d78347337189'
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);

        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          whatsapp: '',
          service: '',
          budget: '',
          description: ''
        });

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Unable to send your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section-padding bg-light-section ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>

          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Let's Build Something Great Together</h2>
            <p className={styles.description}>
              Tell us about your project and let's explore how VSK Digital can help turn your idea into a powerful digital experience.
            </p>

            <div className={styles.contactDetails}>
              <a href={`mailto:${contactConfig.email}`} className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div>
                  <span className={styles.itemLabel}>Email Us</span>
                  <span className={styles.itemValue}>{contactConfig.email}</span>
                </div>
              </a>

              <a href={`https://wa.me/${contactConfig.whatsappNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div>
                  <span className={styles.itemLabel}>WhatsApp</span>
                  <span className={styles.itemValue}>{contactConfig.whatsappNumber}</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formWrapper}>
              {isSuccess ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={64} color="#10b981" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Saikumar" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="company">Business / Company Name</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="sai@example.com" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="whatsapp">WhatsApp Number</label>
                      <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+1 234 567 890" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="service">Service Required *</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                        <option value="" disabled>Select a service</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Full-Stack Development">Full-Stack Development</option>
                        <option value="Business Website">Business Website</option>
                        <option value="API / Backend Development">API / Backend Development</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="budget">Project Budget *</label>
                    <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}>
                      <option value="" disabled>Select a budget range</option>
                      <option value="Under ₹25,000">Under ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Let's Discuss">Let's Discuss</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="description">Project Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project goals, timeline, and requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Project Enquiry'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
