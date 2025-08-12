import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContent}>
        {/* Add your bio, skills, and maybe a futuristic graphic/animation here */}
        <p> [Your Bio - Keep it concise and compelling] </p>
        <p>
          {' '}
          [Skills List - e.g., Languages: JavaScript, Python; Frameworks: React,
          Node.js]{' '}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
