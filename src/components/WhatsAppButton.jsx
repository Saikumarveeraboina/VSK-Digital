import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  return (
    <a 
      href={`https://wa.me/${contactConfig.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`}
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
