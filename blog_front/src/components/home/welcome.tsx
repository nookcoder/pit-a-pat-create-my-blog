import React from 'react';
import styles from './styles/welcome.module.scss';
import me from '../../static/img/IMG_1334.jpg';

const Welcome = () => {
  return (
    <div className={styles.container}>
      {/*왼쪽 섹션*/}
      <section className={styles.left_col}>
        <div className={`${styles.welcome_title}`}>
          Welcome to My
          <br />
          Website
        </div>

        <div className={`${styles.intro_description}`}>
          <span style={{ opacity: 0.5 }}>
            안녕하세요
            <br />
            취미로 개발하는
            <br />
            개발자 김현욱입니다
          </span>
          <span>🧑🏻‍💻</span>
        </div>
      </section>

      {/*오른쪽 섹션*/}
      <section className={styles.image_container}>
        <img src={me} alt="" className={styles.image} />
      </section>
    </div>
  );
};

export default Welcome;
