// src/components/WhatIDeliver.tsx
import React, { JSX } from 'react';
import styles from './/WhatIDeliver.module.css';
import { CgWebsite } from 'react-icons/cg';
import { FaRobot, FaServer } from 'react-icons/fa';
import Highlight from '../Highlight/Highlight';

interface Deliverable {
  Icon: React.ElementType;
  title: string;
  description: React.ReactNode;
}

const deliverables: Deliverable[] = [
  {
    Icon: CgWebsite,
    title: 'From Vision to Reality',
    description: (
      <>
        Architecting and building entire digital products, from high-performance
        UIs in <Highlight>React</Highlight> & <Highlight>Angular</Highlight> to
        scalable <Highlight>micro-frontend</Highlight> systems.
      </>
    ),
  },
  {
    Icon: FaServer,
    title: 'Future-Proof Engineering',
    description: (
      <>
        Developing robust backends with <Highlight>Node.js</Highlight>,
        containerized with <Highlight>Docker</Highlight>, and deployed on{' '}
        <Highlight>AWS</Highlight> cloud infrastructure for maximum performance
        and scalability.
      </>
    ),
  },
  {
    Icon: FaRobot,
    title: 'Strategic Innovation',
    description: (
      <>
        Integrating cutting-edge <Highlight>AI solutions</Highlight> and
        modernizing legacy platforms to give your business a competitive edge
        and improve developer governance.
      </>
    ),
  },
];

export default function WhatIDeliver(): JSX.Element {
  return (
    <section className={styles.deliverables}>
      <h2 className='section-title'>What I Deliver</h2>
      <div className={styles.container}>
        {deliverables.map((d, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardContent}>
              <d.Icon className={styles.icon} />
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
