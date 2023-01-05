import React from 'react';
import styles from './styles/welcome.module.scss';
import { Bounce, JackInTheBox } from 'react-awesome-reveal';

const Welcome = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.area}`}>
        {/*제목*/}
        <section className={styles.title_container}>
          <div className={`${styles.title}`}>
            <Bounce>
              <p>
                Welcome to My
                <br />
                Website
              </p>
            </Bounce>
          </div>

          <div className={`${styles.intro_description}`}>
            <JackInTheBox>
              <span>안녕하세요👋 취미로 개발하는 개발자 김현욱입니다🧑🏻‍💻☀️</span>
            </JackInTheBox>
          </div>
        </section>
      </div>

      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Welcome;
