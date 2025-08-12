import React, { JSX, useState } from 'react';
import styles from './ServicesSection.module.css';
import { FaRocket, FaMobileAlt, FaTools, FaCogs } from 'react-icons/fa';

// Expanded interface to include specific deliverables for each service
interface Service {
  Icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  deliverables: string[];
}

const services: Service[] = [
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

  return (
    <section id='services' className={styles.services}>
      <h2 className='section-title'>How I Can Help You Succeed</h2>
      <div className={styles.container}>
        {/* Left Side: The Navigation Tabs */}
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

        {/* Right Side: The Content Display */}
        <div className={styles.serviceContent}>
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
