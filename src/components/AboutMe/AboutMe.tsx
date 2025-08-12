import React, { useState, useEffect, useRef, JSX } from 'react';
import styles from './AboutMe.module.css';

// Custom Hook to detect when an element is on screen
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  return isIntersecting;
}

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section
      id='about'
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.isVisible : ''}`}>
      <h2 className='section-title'>The Engineer Behind The Code</h2>
      <div className={styles.container}>
        <div className={styles.bioContainer}>
          <div className={styles.bioImageContainer}>
            <img
              src='./img/patricio.png'
              alt='Patricio Cordeiro'
              className={styles.bioImage}
            />
          </div>
          <div className={styles.bioTextContainer}>
            {/* --- NEW: Your name is added here --- */}
            <h3 className={styles.bioName}>Patrício Cordeiro</h3>

            <p className={styles.bioText}>
              For over a decade, I've been driven by a single passion:
              architecting digital solutions that are not only powerful and
              scalable but also a pleasure to use and maintain. I believe the
              best products come from a deep understanding of business needs
              combined with a commitment to clean, high-quality code.
            </p>
            <p className={styles.bioText}>
              This philosophy has guided me while leading teams at major
              financial institutions and innovating with enterprise-level supply
              chain software. When I'm not at the keyboard, I'm passionate about
              learning new technologies and sharing that knowledge with others.
            </p>
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>Primary Tech Arsenal</h3>
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
