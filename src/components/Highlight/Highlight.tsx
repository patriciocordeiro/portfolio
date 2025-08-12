import React from 'react';
import styles from './Highlight.module.css';

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <span className={styles.highlight}>{children}</span>;
};

export default Highlight;
