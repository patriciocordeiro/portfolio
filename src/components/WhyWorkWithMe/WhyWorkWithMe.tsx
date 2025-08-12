import React, { JSX } from 'react';
import styles from './WhyWorkWithMe.module.css';
import { FaUserTie, FaBrain, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

interface Reason {
  Icon: React.ElementType;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    Icon: FaUserTie,
    title: 'Proven Leadership & Reliability',
    text: 'With over a decade of experience leading development teams, you get more than a developer—you get a reliable partner who ensures projects are delivered on time and to the highest standard.',
  },
  {
    Icon: FaBrain,
    title: 'Business-Focused Mindset',
    text: "I bridge the critical gap between technical execution and business objectives. I don't just build features; I build solutions that drive results and provide a return on your investment.",
  },
  {
    Icon: FaSyncAlt,
    title: 'Full-Cycle Ownership',
    text: 'From initial architecture and CI/CD setup to deployment and maintenance, I manage the entire software lifecycle. This means a seamless, cohesive process for you with a single point of contact.',
  },
  {
    Icon: FaLightbulb,
    title: 'Pragmatic Innovation',
    text: 'I apply modern solutions like AI and Web Components strategically, not just for the hype. The focus is always on using the right tool to solve your specific challenges effectively and efficiently.',
  },
];

export default function WhyWorkWithMe(): JSX.Element {
  return (
    <section className={styles.whyMe}>
      <div className={styles.container}>
        <h2 className='section-title'>Why Partner With Me?</h2>
        <div className={styles.grid}>
          {reasons.map((reason, idx) => (
            <div key={idx} className={styles.reasonCard}>
              <div className={styles.iconWrapper}>
                <reason.Icon />
              </div>
              <div className={styles.textWrapper}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
