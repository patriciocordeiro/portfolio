import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string | null; // GitHub link is optional
  demoLink: string | null; // Demo link is optional
}

function ProjectCard({
  title,
  description,
  imageUrl,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <img src={imageUrl} alt={title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectLinks}>
          {githubLink && (
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.projectLink}>
              GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.projectLink}>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
