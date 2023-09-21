import styles from "./Contact.module.css";
import appStyles from "./../../App.module.css";
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import ContactVector from "./../../assets/contact_vector.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import medium from "./../../assets/me.png";
import web from "./../../assets/web.png";

const Contact = () => {
  return (
    <div className={appStyles["section-container"]}>
      <Header
        header="Get in touch."
        details="Interested to collborate? Feel free to send me an email."
      />

      <div className={styles["contact-form-container"]}>
        <form className={styles["contact-form"]}>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className={` ${styles["input-box"]} ${styles["email-input"]}`}
          />

          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className={`${styles["input-box"]} ${styles["body-input"]}`}
          ></textarea>

          <button className={styles["contact-btn"]} type="submit">
            Send Email
          </button>
        </form>
      </div>

      <div className={styles["social-icons-container"]}>
        <a href="https://github.com/Presssure">
          <img
            className={styles["social-icon"]}
            src={github}
            alt="github icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/benny-yang-6a55851b2/e">
          <img
            className={styles["social-icon"]}
            src={linkedin}
            alt="linkedin icon"
          />
        </a>
        <a href="https://instagram">
          <img
            className={styles["social-icon"]}
            src={instagram}
            alt="instagram icon"
          />
        </a>
        <a href="https://medium">
          <img
            className={styles["social-icon"]}
            src={medium}
            alt="meidum icon"
          />
        </a>
        <a href="web">
          <img className={styles["social-icon"]} src={web} alt="web icon" />
        </a>
      </div>
      <FooterLink phrase="Read more " toAddress={"/about"} link="about me." />

      <div className={styles["vector-frame"]}>
        <img
          src={ContactVector}
          alt="vector"
          className={styles["contact-vector"]}
        />
      </div>
    </div>
  );
};

export default Contact;
