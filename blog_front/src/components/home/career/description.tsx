import React from 'react';
import styles from '../styles/career.module.scss';

type DescriptionProps = {
  period: string;
  title: string;
  content: string;
};

const Description = ({ period, title, content }: DescriptionProps) => {
  return (
    <section className={styles.content_box}>
      <div className={styles.content_period}>{period}</div>
      <div className={styles.content_title}>{title}</div>
      <div className={styles.content_detail}>{content}</div>
    </section>
  );
};

export default Description;
