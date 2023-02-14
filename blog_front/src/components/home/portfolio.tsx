import React, { useEffect, useState } from 'react';
import styles from './styles/portfolio.module.scss';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';
import PortfolioCard from './portfolio-card';
import { sdds, pple, green, buckit, imagine, beginlab } from './contents';
import Snow from './animation/snow';

const slides = [
  {
    key: 0,
    content: (
      <PortfolioCard
        title={sdds.title}
        project_description={sdds.project_description}
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
        title={pple.title}
        project_description={pple.project_description}
        skill_stacks={pple.skill_stacks}
        image={pple.image}
        github_url={pple.github_url}
      />
    ),
  },
  {
    key: 2,
    content: (
      <PortfolioCard
        title={green.title}
        project_description={green.project_description}
        skill_stacks={green.skill_stacks}
        image={green.image}
        github_url={green.github_url}
      />
    ),
  },
  {
    key: 3,
    content: (
      <PortfolioCard
        title={buckit.title}
        project_description={buckit.project_description}
        skill_stacks={buckit.skill_stacks}
        image={buckit.image}
        github_url={buckit.github_url}
      />
    ),
  },
  {
    key: 4,
    content: (
      <PortfolioCard
        title={imagine.title}
        project_description={imagine.project_description}
        skill_stacks={imagine.skill_stacks}
        image={imagine.image}
        github_url={imagine.github_url}
      />
    ),
  },
  {
    key: 5,
    content: (
      <PortfolioCard
        title={beginlab.title}
        project_description={beginlab.project_description}
        skill_stacks={beginlab.skill_stacks}
        image={beginlab.image}
        github_url={beginlab.github_url}
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
    <>
      <Snow />
      <div className={styles.container}>
        <div className={styles.carousel_container}>
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
