import React from 'react';
import useWindowDimensions from '../hooks/use-window-dimensions';
import styles from './styles/home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper';

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
        className={styles.content}
      >
        <SwiperSlide>
          Welcome to My
          <br />
          Website
        </SwiperSlide>

        <SwiperSlide>
          Section2
          <br />
          Website
        </SwiperSlide>

        <SwiperSlide>cSection3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
