import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className={styles["modal-overlay"]}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal-container"]}
      >
        <div className={styles["upper-section"]}>
          <h1> Huge announcement!</h1>
          <p onClick={closeModal} className={styles["close"]}>
            &times;
          </p>
        </div>
        <div className={styles["middle-section"]}>
          <h3>Some announcement</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            interdum ligula, sit amet auctor magna. Vestibulum in urna eu purus
            posuere pellentesque vel eget risus. Sed vitae magna arcu. Aliquam
            erat volutpat. Praesent vestibulum tellus id quam ullamcorper
            mattis. Maecenas accumsan, odio sit amet rutrum semper, dolor nunc
            mollis diam, sit amet maximus urna sem eget nisi. Nam ac tincidunt
            ex. In cursus risus felis, eu gravida est suscipit ac. Praesent ut
            scelerisque risus.
          </p>
        </div>
        <div className={styles["lower-section"]}>
          <a
            onClick={closeModal}
            className={`${styles["modal-btn"]} ${styles["btn-red"]}`}
          >
            Close
          </a>
          <a
            className={`${styles["modal-btn"]} ${styles["btn-green"]}`}
            href="https://github.com/Presssure"
            target="_blank"
            rel="noreferrer"
          >
            Check me out
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
