import React, { useEffect, useState } from 'react';
import styles from './styles/portfolio.module.scss';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';
import { motion } from 'framer-motion';
import PortfolioCard from './portfolio-card';
import { sdds } from './contents/Index';
import SDDS from '../../static/img/sdds_main.png';

const slides = [
  {
    key: 0,
    content: (
      <PortfolioCard
        title={sdds.title}
        project_description={sdds.project_description}
        skill_content={sdds.skill_content}
        skill_stacks={sdds.skill_stacks}
        image={sdds.image}
        github_url={sdds.github_url}
      />
    ),
  },
  {
    key: 1,
    content: (
      <PortfolioCard
        title={sdds.title}
        project_description={sdds.project_description}
        skill_content={sdds.skill_content}
        skill_stacks={sdds.skill_stacks}
        image={sdds.image}
        github_url={sdds.github_url}
      />
    ),
  },
  {
    key: 3,
    content: (
      <PortfolioCard
        title={sdds.title}
        project_description={sdds.project_description}
        skill_content={sdds.skill_content}
        skill_stacks={sdds.skill_stacks}
        image={sdds.image}
        github_url={sdds.github_url}
      />
    ),
  },
  {
    key: 4,
    content: (
      <PortfolioCard
        title={sdds.title}
        project_description={sdds.project_description}
        skill_content={sdds.skill_content}
        skill_stacks={sdds.skill_stacks}
        image={sdds.image}
        github_url={sdds.github_url}
      />
    ),
  },
];

const Portfolio = () => {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [cards] = useState(table);
  useEffect(() => {
    setOffsetRadius(2);
    setShowArrows(false);
  }, []);

  return (
    <div className={styles.container}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default Portfolio;
