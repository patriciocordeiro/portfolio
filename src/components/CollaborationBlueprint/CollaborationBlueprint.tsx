import React, { useState, useEffect, useRef, JSX } from 'react';
import styles from './CollaborationBlueprint.module.css';
import { FaSearch, FaFileSignature, FaCode, FaRocket } from 'react-icons/fa';

// Custom Hook to detect when an element is on screen
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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

interface Step {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    Icon: FaSearch,
    title: '1. Discovery & Strategy',
    description:
      "We begin with a deep dive into your project goals, target audience, and challenges to ensure we're solving the right problems.",
  },
  {
    Icon: FaFileSignature,
    title: '2. Proposal & Roadmap',
    description:
      'You receive a clear proposal with defined scope, deliverables, and timeline. We establish a strategic roadmap for success.',
  },
  {
    Icon: FaCode,
    title: '3. Agile Development',
    description:
      'I build your application with clean, efficient code, providing regular updates and demos for your feedback throughout the process.',
  },
  {
    Icon: FaRocket,
    title: '4. Delivery & Deployment',
    description:
      'After a final review, I deliver the full source code and deploy your application to a scalable cloud environment, ensuring a seamless launch.',
  },
];

export default function CollaborationBlueprint(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(containerRef);

  return (
    <section className={styles.blueprint} id='process'>
      <div className={styles.intro}>
        <h2 className='section-title'>My Collaboration Blueprint</h2>
        <p className={styles.subtitle}>
          Wondering how we get from idea to launch? My process is transparent,
          structured, and designed for your success.
        </p>
      </div>
      <div
        ref={containerRef}
        className={`${styles.stepsContainer} ${
          isVisible ? styles.animate : ''
        }`}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={styles.stepCard}
            // Stagger the animation delay for each card
            style={{ transitionDelay: `${idx * 150}ms` }}>
            <div className={styles.iconWrapper}>
              <step.Icon />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
