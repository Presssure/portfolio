import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeAnime from "./../../assets/home_anime.gif";
import Modal from "./../Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={styles["home-container"]}>
      {showModal ? <Modal closeModal={closeModal} /> : null}

      <div className={styles["header-text"]}>
        <h1>Welcome to my portfolio!</h1>
        <p>This is benny a full stack dev and f1 enuthusast</p>
      </div>
      <div className={styles["head-btn"]}>
        <Link to="/about" className={`${styles["btn"]} ${styles["btn-white"]}`}>
          <p className={styles["btn-text"]}>Know more about me</p>
        </Link>
        <Link
          to="/contact"
          className={`${styles["btn"]} ${styles["btn-transparent"]}`}
        >
          <p className={styles["btn-text"]}>Connect with me</p>
        </Link>
      </div>
      <div className={styles["splash-image"]}>
        <img
          src={homeAnime}
          alt="home animation"
          className={styles["home-anime"]}
        />
      </div>
    </div>
  );
};

export default Home;
