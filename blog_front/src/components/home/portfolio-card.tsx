import React, { useEffect } from 'react';
import styles from './styles/portfolio-card.module.scss';
import { motion } from 'framer-motion';
import { Button, Chip, styled } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip';
import useWindowDimensions from '../../hooks/use-window-dimensions';

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
  const { width } = useWindowDimensions();
  const [isHover, setIsHover] = React.useState<boolean>(false);
  useEffect(() => {
    if (width <= 520) {
      setIsHover(true);
    }
  }, [width]);

  return (
    <div>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
      <motion.main
        className={`${styles.box_container} ${styles.box_width}`}
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.1,
          },
        }}
        onHoverStart={() => {
          if (width > 520) {
            setIsHover(true);
          }
        }}
        onHoverEnd={() => {
          if (width > 520) {
            setIsHover(false);
          }
        }}
      >
        {/*타이틀*/}
        <img src={props.image} alt="프로젝트 이미지" className={styles.image} />
        {isHover ? (
          <section className={`${styles.hover_section} ${styles.box_width}`}>
            {/*프로젝트설명*/}
            <div className={styles.description_box}>
              <div>{props.project_description}</div>
            </div>

            {/*기술스택*/}
            <div className={styles.description_box}>
              <div className={styles.sub_title}>Skills</div>
              <div className={styles.chips_container}>
                {props.skill_stacks.map((value, index) => (
                  <Chip
                    color={index > 7 ? colors[index & 6] : colors[index]}
                    label={value}
                    className={styles.chips}
                    variant={'filled'}
                  />
                ))}
              </div>
            </div>

            {/*버튼*/}
            <div className={styles.button_container}>
              <ButtonContained>Demo</ButtonContained>
              <ButtonFiled
                className={styles.button_outlined}
                variant={'outlined'}
              >
                Github
              </ButtonFiled>
            </div>
          </section>
        ) : (
          <></>
        )}
      </motion.main>
    </div>
  );
};

export default PortfolioCard;

// MUI 색상 변수
const colors: OverridableStringUnion<
  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  ChipPropsColorOverrides
>[] = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];

const ButtonContained = styled(Button)({
  width: '90px',
  marginRight: '10px',
  backgroundColor: 'var(--main-color-3)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'var(--main-color-3)',
    opacity: 0.8,
  },
  '&:active': {
    backgroundColor: 'var(--main-color-3)',
  },
  '&:focus': {
    backgroundColor: 'var(--main-color-3)',
  },
});

const ButtonFiled = styled(Button)({
  width: '90px',
  borderColor: 'var(--main-color-3)',
  color: 'var(--main-color-3)',
  '&:hover': {
    borderColor: 'var(--main-color-3)',
    opacity: 0.8,
  },
  '&:active': {
    backgroundColor: 'white',
  },
  '&:focus': {
    backgroundColor: 'white',
  },
});
