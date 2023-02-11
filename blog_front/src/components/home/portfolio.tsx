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
      <motion.main
        className={styles.box_container}
        whileHover={{
          scale: 1.02,
          boxShadow: '5px 4px 5px 4px rgba(0, 0, 0, 0.4)',
          transition: {
            duration: 0.1,
          },
        }}
      >
        <section className={styles.description_container}>
          {/*타이틀*/}
          <div className={styles.title}>NoCoding 웹사이트 제작 SaaS</div>

          {/*프로젝트설명*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>프로젝트설명</div>
            <div>블라블라프로젝트 설명</div>
          </div>

          {/*기술스택*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>기술스택</div>
            <div>aws javascript docker</div>
          </div>

          {/*상세내용*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>개발내용</div>
            <div>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
            </div>
          </div>
        </section>
        <div>
          <img
            src={SDDS}
            alt="sdds 메인화면"
            className={styles.image_container}
          />
        </div>
      </motion.main>
    ),
  },
  {
    key: 3,
    content: (
      <motion.main
        className={styles.box_container}
        whileHover={{
          scale: 1.02,
          boxShadow: '5px 4px 5px 4px rgba(0, 0, 0, 0.4)',
          transition: {
            duration: 0.1,
          },
        }}
      >
        <section className={styles.description_container}>
          {/*타이틀*/}
          <div className={styles.title}>NoCoding 웹사이트 제작 SaaS</div>

          {/*프로젝트설명*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>프로젝트설명</div>
            <div>블라블라프로젝트 설명</div>
          </div>

          {/*기술스택*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>기술스택</div>
            <div>aws javascript docker</div>
          </div>

          {/*상세내용*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>개발내용</div>
            <div>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
              <span>- 개발 내용개발 내용개발 내용개발 내용</span>
              <br></br>
            </div>
          </div>
        </section>
        <div>
          <img
            src={SDDS}
            alt="sdds 메인화면"
            className={styles.image_container}
          />
        </div>
      </motion.main>
    ),
  },
  {
    key: 4,
    content: (
      <motion.main
        className={styles.box_container}
        whileHover={{
          scale: 1.02,
          boxShadow: '5px 4px 5px 4px rgba(0, 0, 0, 0.4)',
          transition: {
            duration: 0.1,
          },
        }}
      >
        <section className={styles.description_container}>
          {/*타이틀*/}
          <div className={styles.title}>NoCoding 웹사이트 제작 SaaS</div>

          {/*프로젝트설명*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>프로젝트설명</div>
            <div>블라블라프로젝트 설명</div>
          </div>

          {/*기술스택*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>기술스택</div>
            <div>aws javascript docker</div>
          </div>

          {/*상세내용*/}
          <div className={styles.description_box}>
            <div className={styles.sub_title}>개발내용</div>
          </div>
        </section>
        <div>
          <img
            src={SDDS}
            alt="sdds 메인화면"
            className={styles.image_container}
          />
        </div>
      </motion.main>
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
