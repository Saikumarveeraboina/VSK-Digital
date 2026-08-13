import React from 'react';
import { contactConfig } from '../config/contact';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logoContainer}>
              <img src={logoImg} alt="VSK Digital Logo" className={styles.logoImage} />
              <span className={styles.logoText}>VSK Digital</span>
            </a>
            <p className={styles.tagline}>
              Digital experiences built for ambitious businesses.
            </p>
            <div className={styles.socials}>
              <a href={contactConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin size={20} />
              </a>
              <a href={contactConfig.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub size={20} />
              </a>
              <a href={contactConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linksList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${contactConfig.email}`} className={styles.contactLink}>
                  <Mail size={16} /> {contactConfig.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contactConfig.whatsappNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <Phone size={16} /> {contactConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear > 2026 ? currentYear : 2026} VSK Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
