import { useEffect } from "react";
import styles from "./Skills.module.css";

const SkillCard = ({ skillName, skillColor }) => {
  let skillUrl = skillName;
  skillUrl = skillUrl.toLowerCase();
  skillUrl = skillUrl.replace(" ", "-");

  function setColor(newColor) {
    document.documentElement.style.setProperty("--skills-color", newColor);
  }

  useEffect(() => {
    const c = getComputedStyle(document.documentElement).getPropertyValue(
      "--skills-color"
    );
  }, []);

  return (
    <div className={styles["skill"]} id="sColor">
      <a onMouseOver={() => setColor(skillColor)} className={styles.circle}>
        <img
          alt="skill"
          className={`${styles.icon} ${styles.fab}`}
          src={require(`./../../assets/s/${skillUrl}.png`)}
        />

        {/* <img alt="skill" src={js} className={`${styles.icon} ${styles.fab}`} /> */}
      </a>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
