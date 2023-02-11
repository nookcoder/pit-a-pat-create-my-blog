import React from 'react';
import styles from './styles/career.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative, Pagination } from 'swiper';
import Description from './career/description';
import { CONTENTS } from './career/contents';

const Career = () => {
  return (
    <div className={styles.background}>
      <main className={`${styles.main}`}>
        <div className={styles.title}>Experience</div>
        <div className={styles.blank}></div>
        <Swiper
          autoplay={true}
          grabCursor={true}
          effect={'creative'}
          pagination={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-120%', 0, -300],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -300],
            },
          }}
          modules={[EffectCreative, Pagination]}
          className={`${styles.content_container}`}
        >
          <SwiperSlide>
            <Description
              period={CONTENTS.CAREER.PPLE.period}
              title={CONTENTS.CAREER.PPLE.title}
              content={CONTENTS.CAREER.PPLE.content}
            />

            <Description
              period={CONTENTS.CAREER.BUCKIT.period}
              title={CONTENTS.CAREER.BUCKIT.title}
              content={CONTENTS.CAREER.BUCKIT.content}
            />

            <Description
              period={CONTENTS.CAREER.BEGINLAB.period}
              title={CONTENTS.CAREER.BEGINLAB.title}
              content={CONTENTS.CAREER.BEGINLAB.content}
            />

            <Description
              period={CONTENTS.CAREER.BEEBLOCK.period}
              title={CONTENTS.CAREER.BEEBLOCK.title}
              content={CONTENTS.CAREER.BEEBLOCK.content}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Description
              period={CONTENTS.AWARDS.IMAGIN_CUP.period}
              title={CONTENTS.AWARDS.IMAGIN_CUP.title}
              content={CONTENTS.AWARDS.IMAGIN_CUP.content}
            />
            <Description
              period={CONTENTS.AWARDS.SEJONG_START_UP.period}
              title={CONTENTS.AWARDS.SEJONG_START_UP.title}
              content={CONTENTS.AWARDS.SEJONG_START_UP.content}
            />
            <Description
              period={CONTENTS.AWARDS.DATA_BI.period}
              title={CONTENTS.AWARDS.DATA_BI.title}
              content={CONTENTS.AWARDS.DATA_BI.content}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Description
              period={CONTENTS.ETC.EN.period}
              title={CONTENTS.ETC.EN.title}
              content={CONTENTS.ETC.EN.content}
            />
            <Description
              period={CONTENTS.ETC.CHANNEL_TALK.period}
              title={CONTENTS.ETC.CHANNEL_TALK.title}
              content={CONTENTS.ETC.CHANNEL_TALK.content}
            />
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.content_container}`}></div>
      </main>
    </div>
  );
};

export default Career;
