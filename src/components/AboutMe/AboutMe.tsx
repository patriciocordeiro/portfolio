import React, { JSX } from 'react';
import styles from './AboutMe.module.css';

const techCategories = [
  {
    name: 'Frontend',
    techs: ['React', 'Angular', 'Next.js', 'Web Components', 'Lit', 'NgRx'],
  },
  {
    name: 'Mobile',
    techs: ['React Native', 'Flutter', 'Ionic'],
  },
  {
    name: 'Backend & Cloud',
    techs: ['Node.js', 'NestJS', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud'],
  },
  {
    name: 'Innovation & Tools',
    techs: [
      'AI Prompt Engineering',
      'Git',
      'Jenkins',
      'Storybook',
      'Agile/Scrum',
    ],
  },
];

export default function AboutMe(): JSX.Element {
  return (
    <section id='about' className={styles.aboutSection}>
      <h2 className='section-title'>The Engineer Behind The Code</h2>
      <div className={styles.container}>
        <div className={styles.bioContainer}>
          <p className={styles.bioText}>
            For over a decade, I've been driven by a single passion:
            architecting digital solutions that are not only powerful and
            scalable but also a pleasure to use and maintain. I believe the best
            products come from a deep understanding of business needs combined
            with a commitment to clean, high-quality code.
          </p>
          <p className={styles.bioText}>
            This philosophy has guided me while leading teams at major financial
            institutions and innovating with enterprise-level supply chain
            software. When I'm not at the keyboard, I'm passionate about
            learning new technologies and sharing that knowledge with others.
          </p>
        </div>

        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>Primary Tech Stack</h3>
          <div className={styles.categoriesGrid}>
            {techCategories.map((cat) => (
              <div key={cat.name} className={styles.category}>
                <h4>{cat.name}</h4>
                <div className={styles.techList}>
                  {cat.techs.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
