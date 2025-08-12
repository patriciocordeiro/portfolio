import React, { useState, useEffect, useRef, JSX } from 'react';
import styles from './Services.module.css';
import { FaRocket, FaMobileAlt, FaTools, FaCogs } from 'react-icons/fa';

// Custom Hook to detect when an element is on screen
// It's good practice to define this in a separate file if used by many components,
// but for simplicity, we can include it here.
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

const services = [
  {
    Icon: FaRocket,
    title: 'Full Application Build',
    description:
      'From a simple idea to a fully deployed product. I handle the entire development lifecycle to bring your vision to life.',
    deliverables: [
      'Full-Stack Architecture Design',
      'Scalable Backend & Database',
      'Pixel-Perfect UI/UX Implementation',
      'CI/CD & Cloud Deployment (AWS)',
      'API Documentation',
    ],
  },
  {
    Icon: FaMobileAlt,
    title: 'Cross-Platform Mobile Apps',
    description:
      'Reach users on both iOS and Android with a single, high-performance codebase.',
    deliverables: [
      'React Native or Flutter Development',
      'App Store & Google Play Publishing',
      'Push Notification Integration',
      'Offline Capabilities',
      'Performance Optimization',
    ],
  },
  {
    Icon: FaTools,
    title: 'Code Rescue & Modernization',
    description:
      'Breathe new life into an existing codebase. I specialize in untangling complex issues and upgrading legacy systems.',
    deliverables: [
      'Critical Bug Fixes & Refactoring',
      'Performance Bottleneck Analysis',
      'Upgrading Framework Versions',
      'Improving Test Coverage',
      'Modernizing UI/UX',
    ],
  },
  {
    Icon: FaCogs,
    title: 'Feature Implementation',
    description:
      'Need to add a specific new feature to your application? I integrate seamlessly with existing teams to deliver high-quality, targeted features.',
    deliverables: [
      'New Feature Development',
      'Third-Party API Integration',
      'AI-Powered Feature Prototyping',
      'State Management (NgRx / Redux)',
      'Component Library Additions',
    ],
  },
];

export default function Services(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  // --- NEW: Refs and logic for the outer animation ---
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section
      id='services'
      ref={sectionRef}
      // --- NEW: Apply animation class when visible ---
      className={`${styles.services} ${isVisible ? styles.isVisible : ''}`}>
      <h2 className='section-title'>How I Can Help You Succeed</h2>

      <div className={styles.container}>
        <div className={styles.serviceTabs}>
          {services.map((service, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                index === activeIndex ? styles.active : ''
              }`}
              onClick={() => setActiveIndex(index)}>
              <service.Icon className={styles.tabIcon} />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        <div key={activeIndex} className={styles.serviceContent}>
          <activeService.Icon className={styles.contentIcon} />
          <h3>{activeService.title}</h3>
          <p className={styles.description}>{activeService.description}</p>
          <ul className={styles.deliverablesList}>
            {activeService.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
