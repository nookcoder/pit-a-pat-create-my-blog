import React from 'react';
import styles from './styles/home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Mousewheel, Pagination } from 'swiper';
import Welcome from '../components/home/welcome';
import IntroduceMe from '../components/home/introduce-me';

const Home = () => {
  return (
    <div className={styles.container}>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={`${styles.content}`}
        speed={1000}
      >
        <SwiperSlide
          className={`${styles.content} ${styles.welcome_background}`}
        >
          <Welcome />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.content} ${styles.introduce_me_background}`}
        >
          {({ isActive }) => <IntroduceMe isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide>cSection3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
