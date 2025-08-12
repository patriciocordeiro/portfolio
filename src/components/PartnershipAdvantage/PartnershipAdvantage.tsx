import React, { useState, useEffect, useRef, JSX } from 'react';
import styles from './PartnershipAdvantage.module.css';
import { FaUserTie, FaBrain, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

// Custom Hook to detect when an element is on screen
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin: '-100px', threshold: 0.1 }
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

interface Advantage {
  Icon: React.ElementType;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    Icon: FaUserTie,
    title: 'Proven Leadership',
    text: 'You get a reliable partner who ensures projects are delivered on time and to the highest standard.',
  },
  {
    Icon: FaBrain,
    title: 'Strategic Thinking',
    text: "I don't just build features; I build solutions that solve business problems and provide a clear return on investment.",
  },
  {
    Icon: FaSyncAlt,
    title: 'End-to-End Execution',
    text: 'From initial architecture to final deployment, I manage the entire software lifecycle for a seamless, cohesive process.',
  },
  {
    Icon: FaLightbulb,
    title: 'Pragmatic Innovation',
    text: 'I apply modern tech like AI and Web Components strategically to solve your specific challenges, not just for the hype.',
  },
];

export default function PartnershipAdvantage(): JSX.Element {
  const diagramRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(diagramRef);

  return (
    <section className={styles.advantageSection}>
      <div className={styles.intro}>
        <h2 className='section-title'>The Partnership Advantage</h2>
        <p className={styles.subtitle}>
          It's about more than just code. It's about a professional partnership
          that delivers real business value.
        </p>
      </div>
      <div
        ref={diagramRef}
        className={`${styles.diagramContainer} ${
          isVisible ? styles.animate : ''
        }`}>
        <div className={styles.centralNode}>
          <span>Successful Project Delivery</span>
        </div>
        {advantages.map((advantage, idx) => (
          <div
            key={idx}
            className={`${styles.advantageNode} ${styles[`node${idx + 1}`]}`}>
            <advantage.Icon className={styles.icon} />
            <h3>{advantage.title}</h3>
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
