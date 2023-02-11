import React from 'react';
import styles from './styles/career.module.scss';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import Experience from './career/experience';

const Career = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.background}>
      <main className={`${styles.main}`}>
        <div className={styles.title}>Experience</div>
        <Experience width={width} />
      </main>
    </div>
  );
};

export default Career;
