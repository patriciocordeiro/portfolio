// src/components/SocialProof/SocialProof.tsx
import React from 'react';
import styles from './SocialProof.module.css';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CTO, FinTech Startup',
    quote:
      'Patricio is a rare blend of technical expertise and leadership. He architected our platform with scalability in mind and mentored our team to deliver on time.',
    avatar: '/img/avatar-jane.png',
  },
  {
    name: 'John Smith',
    title: 'Engineering Manager, Enterprise SaaS',
    quote:
      'His ability to break down complex problems and drive consensus is unmatched. Our migration to micro-frontends was a success thanks to his vision.',
    avatar: '/img/avatar-john.png',
  },
  {
    name: 'Maria Silva',
    title: 'Product Owner, Banking App',
    quote:
      'Patricio brought a product mindset to our engineering team. He always advocates for the user and delivers features that matter.',
    avatar: '/img/avatar-maria.png',
  },
];

export default function SocialProof(): React.ReactElement {
  return (
    <section className={styles.socialProof}>
      <h2 className="section-title">What People Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((t, idx) => (
          <div key={idx} className={styles.testimonialCard}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} />
            <blockquote className={styles.quote}>
              “{t.quote}”
            </blockquote>
            <div className={styles.author}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.title}>{t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
