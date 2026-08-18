import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import styles from './Plans.module.css';

const plansData = [
  {
    id: 'silver',
    name: 'Silver',
    icon: '🩶',
    description: 'Perfect for small businesses and personal websites looking to establish their online presence.',
    features: [
      '3–5 Pages',
      'WhatsApp Feature',
      'Social Media Integration',
      'Free SSL Certificate',
      'Responsive — Mobile / Tablet / Desktop',
      '1 Year Domain Free',
      '1 Year Hosting Free',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: '🟨',
    description: 'Ideal for growing businesses that need advanced features and search engine visibility.',
    features: [
      '5–10 Pages',
      'WhatsApp Feature',
      'Social Media Integration',
      'Free SSL Certificate',
      'Responsive — Mobile / Tablet / Desktop',
      '1 Year Domain Free',
      '1 Year Hosting Free',
      'SEO Optimization',
      'Call Button',
      '3 Months Support',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond',
    icon: '💎',
    description: 'The ultimate package for enterprises needing full-stack features, admin control, and year-round support.',
    features: [
      '15+ Pages',
      'Admin Panel',
      'Payment Integration',
      'WhatsApp Feature',
      'Social Media Integration',
      'Free SSL Certificate',
      'Responsive — Mobile / Tablet / Desktop',
      '1 Year Domain Free',
      '1 Year Hosting Free',
      'Chatbot Integration',
      '1 Year Support',
    ],
    recommended: true,
  },
];

const tierStyles = {
  silver: {
    card: styles.silver,
    icon: styles.silverIcon,
    badge: styles.silverBadge,
    check: styles.silverCheck,
    cta: styles.silverCta,
    divider: '',
  },
  gold: {
    card: styles.gold,
    icon: styles.goldIcon,
    badge: styles.goldBadge,
    check: styles.goldCheck,
    cta: styles.goldCta,
    divider: styles.goldDivider,
  },
  diamond: {
    card: styles.diamond,
    icon: styles.diamondIcon,
    badge: styles.diamondBadge,
    check: styles.diamondCheck,
    cta: styles.diamondCta,
    divider: styles.diamondDivider,
  },
};

const Plans = () => {
  return (
    <section id="plans" className={`section-padding bg-dark-section ${styles.plansSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Plans Tailored to <span className="text-gradient">Your Growth</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the plan that fits your business needs. Every plan comes with a
            stunning, fully responsive website — no hidden costs.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {plansData.map((plan, index) => {
            const tier = tierStyles[plan.id];
            return (
              <motion.div
                key={plan.id}
                className={`${styles.card} ${tier.card}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {plan.recommended && (
                  <span className={styles.recommended}>★ Most Popular</span>
                )}

                <div className={tier.icon}>{plan.icon}</div>
                <span className={tier.badge}>{plan.name}</span>
                <h3 className={styles.planName}>{plan.name} Plan</h3>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={`${styles.divider} ${tier.divider}`} />

                <span className={styles.featuresTitle}>What's Included</span>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={`${styles.checkIcon} ${tier.check}`}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`${styles.ctaButton} ${tier.cta}`}
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
