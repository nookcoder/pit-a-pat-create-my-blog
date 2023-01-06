import React from 'react';
import styles from './styles/introduce-me.module.scss';

import { motion } from 'framer-motion';
import { Grid } from '@mui/material';

const IntroduceMe = () => {
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 6 }}
      >
        <Grid item xs={2} sm={2} md={2}>
          <span className={styles.h1}>
            Introduce<br></br> Me
          </span>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <motion.div
            className={styles.item}
            animate={{
              opacity: [0.5, 1],
              x: [-100, 0],
            }}
            transition={{
              ease: 'easeInOut',
              duration: 2,
            }}
            exit={{
              opacity: [0.5],
              x: -100,
            }}
          >
            <div className={styles.number}>01</div>
            <div className={styles.title}>Start-up</div>
            <div>
              창업을 하고 싶어서 개발을 시작했었습니다. 지정헌헐매칭플랫폼
              ‘피플'을 통해 5000만원 투자를 받았고, 로컬 비즈니스 투자 플랫폼을
              통해 총 투자금 1000만원을 모은 경험이 있습니다. 저는 이러한 경험을
              바탕으로 다른 개발자보다 비즈니스 요구사항 분석 및 설계에 강점을
              가지고 있습니다. 또한 비즈니스가 어떻게 발전할 수 있을지 고민했던
              경험을 바탕으로 확장성을 고려한 설계를 할 수 있습니다.
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <motion.div
            className={styles.item}
            layout
            animate={{ opacity: [0.5, 1], scale: [0.5, 1] }}
            transition={{ duration: 2 }}
          >
            <div className={styles.number}>02</div>
            <div className={styles.title}>Challenge</div>
            <div>
              도전을 두려워하지 않고 최고가 되려고 노력합니다. 2019년 군대에서
              미래는 컴퓨터에 있다고 생각했고 기계항공우주공학을 포기하고 무작정
              프로그래밍을 공부하기 시작했습니다. 약 2년이라는 시간동안 열심히
              독학을 헀고 저의 기술을 통해 2번의 창업을 경험했습니다. 처음
              프로그래밍, 창업을 시작했을 때 모두가 걱정했고 만류했지만 지금은
              응원해주고 조언을 구합니다. 현재는 최고의 개발자가 되기 위해서
              열심히 노력하고 있습니다.
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <motion.div
            className={styles.item}
            animate={{ opacity: [0.5, 1], scale: [0.5, 1] }}
            transition={{ duration: 2 }}
          >
            <div className={styles.number}>03</div>
            <div className={styles.title}>Humanities</div>
            <div>
              인문학에 관심이 많습니다. 소프트웨어 개발은 결국엔 사람을 위해서
              만드는 것이고, 사람들과 함께 만들어가는 것이라고 생각합니다. 좋은
              제품은 좋은 팀에서 출발한다고 생각합니다. 인문학과 관련된 책을
              읽으면서 사람에 대해 고민하고 좋은 팀을 만드는 법을 생각합니다.
              또한 좋은 커뮤니케이션 방법을 찾고 적용합니다.
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <motion.div
            className={styles.item}
            animate={{ opacity: [0.5, 1], x: [100, 0] }}
            transition={{ duration: 2 }}
          >
            <div className={styles.number}>04</div>
            <div className={styles.title}>Learning</div>
            <div>
              라이브러리, 프레임워크, 새로운 기술을 공부할 때는 그 기술의 철학과
              원리를 이해하려고 합니다. 해당 기술이나 이론이 나오게 된 배경을
              알고 작동 원리를 알고 사용해야 쉽고 잘 사용할 수 있다고 믿고
              있습니다. 시간에 쫓겨 급하게 사용했던 기술들도 다시 한 번 찾아보고
              기록하려고 노력하고 있습니다. 이 웹사이트 그런 용도로 사용하기
              위해 제작했습니다.
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default IntroduceMe;
