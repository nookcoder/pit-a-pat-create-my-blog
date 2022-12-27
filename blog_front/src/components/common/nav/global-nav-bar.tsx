import React from 'react';
import styles from './styles/global-nav-bar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

const GlobalNavBar = () => {
  return (
    <div>
      <div className={styles.container}>
        {/*왼쪽*/}
        <section className={styles.container_left}>
          {/*로고*/}
          <div className={styles.logo}>
            <span>Hyeonuk</span>
          </div>

          {/*로고 옆 메뉴*/}
          <div className={styles.menu}>
            <span>Blog</span>
          </div>

          <div className={styles.menu}>
            <span>Projects</span>
          </div>
        </section>

        {/*오른쪽*/}
        {/*todo : Introduction,  Profile, */}
        <section>
          <span className={styles.menu}>{/*<MenuIcon />*/}</span>
        </section>
      </div>
    </div>
  );
};

export default GlobalNavBar;
