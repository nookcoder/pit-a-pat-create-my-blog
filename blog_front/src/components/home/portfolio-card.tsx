import React from 'react';
import styles from './styles/portfolio-card.module.scss';
import { motion } from 'framer-motion';
import { Button, Chip, styled } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip';

interface Props {
  title: string;
  project_description: string;
  skill_stacks: string[];
  skill_content: string[];
  image: string | undefined;
  demo_url?: string | undefined;
  github_url?: string | undefined;
}

const PortfolioCard = (props: Props) => {
  return (
    <motion.main
      className={styles.box_container}
      whileHover={{
        boxShadow: '5px 4px 5px 4px rgba(0, 0, 0, 0.4)',
        scale: 1.02,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <section className={styles.description_container}>
        {/*타이틀*/}
        <div className={styles.title}>{props.title}</div>

        {/*프로젝트설명*/}
        <div className={styles.description_box}>
          <div className={styles.sub_title}>프로젝트설명</div>
          <div>{props.project_description}</div>
        </div>

        {/*기술스택*/}
        <div className={styles.description_box}>
          <div className={styles.sub_title}>기술스택</div>
          <div className={styles.chips_container}>
            {props.skill_stacks.map((value, index) => (
              <Chip
                color={index > 8 ? colors[index & 7] : colors[index]}
                label={value}
                className={styles.chips}
                variant={index % 2 === 0 ? 'filled' : 'outlined'}
              />
            ))}
          </div>
        </div>

        {/*상세내용*/}
        <div className={styles.description_box}>
          <div className={styles.sub_title}>개발내용</div>
          <div>
            {props.skill_content.map((value) => (
              <div>• {value}</div>
            ))}
          </div>
        </div>

        {/*버튼*/}
        <div>
          <ButtonContained>Demo</ButtonContained>
          <ButtonFiled className={styles.button_outlined} variant={'outlined'}>
            Github
          </ButtonFiled>
        </div>
      </section>

      <div>
        <img
          src={props.image}
          alt="프로젝트 이미지"
          className={styles.image_container}
        />
      </div>
    </motion.main>
  );
};

export default PortfolioCard;

// MUI 색상 변수
const colors: OverridableStringUnion<
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning',
  ChipPropsColorOverrides
>[] = [
  'default',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
];

const ButtonContained = styled(Button)({
  width: '90px',
  marginRight: '10px',
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'black',
    opacity: 0.8,
  },
  '&:active': {
    backgroundColor: 'black',
  },
  '&:focus': {
    backgroundColor: 'black',
  },
});

const ButtonFiled = styled(Button)({
  width: '90px',
  borderColor: 'black',
  color: 'black',
  '&:hover': {
    borderColor: 'black',
    opacity: 0.8,
  },
  '&:active': {
    backgroundColor: 'white',
  },
  '&:focus': {
    backgroundColor: 'white',
  },
});
