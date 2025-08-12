import React, { JSX } from 'react';
import styles from './HeroSection.module.css';
import Highlight from '../Highlight/Highlight';

export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* <div className={styles.imageContainer}>
          <img
            src='/img/your-photo.jpg'
            alt='Patricio Cordeiro'
            className={styles.profileImage}
          />
        </div> */}
        <div className={styles.textContainer}>
          {/* <h1 className={styles.headline}>
            <Highlight>Reliable</Highlight> Web & Mobile Development Services{' '}
            <Highlight>Tailored to Your Needs</Highlight>.
          </h1> */}
          {/* --- NEW INTRODUCTORY LINE --- */}
          <h2 className={styles.introText}>Hi, I'm Patrício Cordeiro!</h2>

          <h2 className={styles.headline}>
            I Provide Web Development Services <br />
            Tailored to Your Needs.
          </h2>

          {/* <div className={styles.textContainer}>
            <h1 className={styles.headline}>
              I deliver reliable web & mobile solutions tailored to your needs.
            </h1> */}
          <p className={styles.tagline}>
            From full projects to quick fixes, I provide quality work backed by
            expertise in modern technologies, like <Highlight>React</Highlight>,{' '}
            <Highlight>Angular</Highlight>, <Highlight>React native</Highlight>{' '}
            and <Highlight>Node.js</Highlight>.
          </p>
          {/* </div> */}

          {/* <p className={styles.tagline}>
            Whether it's <Highlight>full projects</Highlight>,{' '}
            <Highlight>bug fixes</Highlight>, or{' '}
            <Highlight>small improvements</Highlight>, I deliver{' '}
            <Highlight>quality solutions</Highlight> with expertise in modern
            frameworks like <Highlight>React</Highlight>,{' '}
            <Highlight>Angular</Highlight>, <Highlight>React native</Highlight>{' '}
            and <Highlight>Node.js</Highlight>.
          </p> */}

          {/* <p>
            I deliver web and mobile applications using cutting-edge frameworks
            such as <Highlight>React</Highlight>, <Highlight>Angular</Highlight>
            , <Highlight>React Native</Highlight>,{' '}
            <Highlight>Flutter</Highlight>, and <Highlight>Ionic</Highlight>. On
            the backend and cloud side, I work with{' '}
            <Highlight>Node.js</Highlight>, <Highlight>Google Cloud</Highlight>,
            and <Highlight>AWS</Highlight> to build scalable and secure
            solutions.
          </p> */}
        </div>
      </div>
    </section>
  );
}
