import styles from "../styles/HeaderSub.module.css";

const HeaderSubComm = () => {
  return (
    <div className={styles.divlayoutNavigationSecondar}>
      <div className={styles.divcss1pnwvys}>
        <div className={styles.divcss17fh4sh}>
          <div className={styles.nav}>
            <div className={styles.spancss1ecsbekmargin2}>
              <div className={styles.link3d}>자유게시판</div>
            </div>
            <div className={styles.spancss1ecsbekmargin2}>
              <div className={styles.link3d}>오운완</div>
            </div>
            <div className={styles.spancss1ecsbekmargin2}>
              <div className={styles.link3d}>카테고리3</div>
            </div>
          </div>
        </div>
        <div className={styles.divcssYfr560}>
          <div className={styles.button}>
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubComm;