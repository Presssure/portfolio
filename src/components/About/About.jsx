import styles from "./About.module.css";
import appStyles from "./../../App.module.css";
import Header from "./../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import FooterLink from "./../FooterLink/FooterLink";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className={appStyles["section-container"]}>
      <Header
        header="About Me"
        details="Computer science grduate full stack software engineer"
      />

      <div className={styles["about-main"]}>
        <div className={styles["about-main-left"]}>
          {/* subsection 1 */}
          <h3 className={styles["about-sub-head"]}>Compsci graduate</h3>
          <p className={styles["about-details"]}>
            I love computer science is it is my potential passion kinda maybe
            idk tbh ye help me
          </p>
          <a
            className={styles["about-link-element"]}
            href="https://www.linkedin.com/in/benny-yang-6a55851b2/"
          >
            Linkedin
          </a>

          {/* subsection 2 */}
          <h3 className={styles["about-sub-head"]}>Compsci graduate</h3>
          <p className={styles["about-details"]}>
            I love computer science is it is my potential passion kinda maybe
            idk tbh ye help me
          </p>
          <a
            className={styles["about-link-element"]}
            href="https://www.linkedin.com/in/benny-yang-6a55851b2/"
          >
            Linkedin
          </a>
        </div>

        <div className={styles["about-main-right"]}>
          <img
            className={styles["about-anime"]}
            src={aboutAnime}
            alt="animation"
          />
        </div>
      </div>

      <FooterLink
        phrase="Checkout my "
        link="projects!"
        toAddress={"/projects"}
      />
      {/* Vector frame */}
      <div className={styles["vector-frame"]}>
        <img src={aboutVector} className={styles["about-vector"]} />
      </div>
    </div>
  );
};

export default About;
