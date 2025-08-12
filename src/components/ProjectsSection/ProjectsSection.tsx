import React, { useState, useEffect, useRef, JSX } from 'react';
import styles from './ProjectsSection.module.css';
import Highlight from '../Highlight/Highlight';
// Custom Hook to detect when an element is on screen
function useOnScreen(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

interface Project {
  client: string;
  title: string;
  challenge: string;
  solution: React.ReactNode;
  techStack: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    client: 'Körber Supply Chain',
    title: 'Enterprise UI Component Library',
    challenge:
      'Unify development across disparate Angular and React teams to accelerate feature delivery and ensure brand consistency.',
    solution: (
      <>
        I architected and led the development of a new, framework-agnostic UI
        library using <Highlight>Web Components</Highlight> and{' '}
        <Highlight>Lit</Highlight>. This provided a single source of truth for
        all frontend teams and included a robust CI/CD pipeline on{' '}
        <Highlight>Azure DevOps</Highlight> from day one.
      </>
    ),
    techStack: [
      'Web Components',
      'Lit',
      'Angular',
      'React',
      'Azure DevOps',
      'Storybook',
    ],
    imageUrl: '/img/project-koerber.png',
  },
  {
    client: 'Itaú Bank (via Zup IT)',
    title: 'Mobile Banking App Modernization',
    challenge:
      'A flagship mobile banking app was plagued with integration bugs and poor governance between cross-functional teams.',
    solution: (
      <>
        As Tech Lead, I drove the adoption of a{' '}
        <Highlight>micro-frontend</Highlight> architecture. By leveraging{' '}
        <Highlight>React Native</Highlight> and <Highlight>Flutter</Highlight>,
        we decoupled teams, clarified responsibilities, and drastically reduced
        integration conflicts, stabilizing the platform.
      </>
    ),
    techStack: [
      'React Native',
      'Flutter',
      'Micro-Frontends',
      'iOS',
      'Android',
      'Agile',
    ],
    imageUrl: '/img/project-zup.png',
  },
  {
    client: 'Andbank Brasil (via BRQ)',
    title: 'Financial Investment Platform',
    challenge:
      'Build a complex, large-scale web platform for financial investments from the ground up, requiring high security and scalability.',
    solution: (
      <>
        I directed a team of 12 developers through the entire project lifecycle.
        I designed a scalable <Highlight>Angular</Highlight> architecture using{' '}
        <Highlight>NgRx</Highlight> for state management and oversaw the CI/CD
        process with <Highlight>Jenkins</Highlight> to ensure rapid, reliable
        delivery.
      </>
    ),
    techStack: ['Angular', 'NgRx', 'Node.js', 'Jenkins', 'Scrum', 'Kanban'],
    imageUrl: '/img/project-brq.png',
  },
];

// NEW: Sub-component for individual cards to handle their own animation state
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(cardRef);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${isVisible ? styles.isVisible : ''} ${
        isEven ? styles.evenCard : styles.oddCard
      }`}>
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.clientName}>{project.client}</span>
        <h3>{project.title}</h3>
        <div className={styles.section}>
          <h4>The Challenge</h4>
          <p>{project.challenge}</p>
        </div>
        <div className={styles.section}>
          <h4>The Solution</h4>
          <p>{project.solution}</p>
        </div>
        <div className={styles.section}>
          <h4>Tech Stack</h4>
          <div className={styles.techList}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects(): JSX.Element {
  return (
    <section id='projects' className={styles.projects}>
      <h2 className='section-title'>Featured Case Studies</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
