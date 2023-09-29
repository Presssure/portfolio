import styles from "./NewHome.module.css";
import Me from "./../../assets/me.gif";
import { Link } from "react-router-dom";

const NewHome = () => {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["left"]}>
        <div className={styles["header-text"]}>
          <h1>BENNY YANG</h1>
          <h2>Portfolio</h2>
          <p>
            I am a Computer Science graduate with a strong commitment to
            excellence and a deep love for technology. I'm dedicated to
            delivering top-quality work, continuously learning, and pushing the
            boundaries of innovation. I'm excited to contribute to
            groundbreaking projects and embrace new challenges in the world of
            technology.
          </p>

          <div className={styles["head-btn"]}>
            <Link
              to="/projects"
              className={`${styles["btn"]} ${styles["btn-white"]}`}
            >
              <p className={styles["btn-text"]}>See my projects</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <img src={Me} className={styles["image"]} />
        <div className={styles["head-btn"]}>
          <Link
            to="/contact"
            className={`${styles["btn"]} ${styles["btn-white"]} ${styles["right-button"]}`}
          >
            <p className={styles["btn-text"]}>Connect with me</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
