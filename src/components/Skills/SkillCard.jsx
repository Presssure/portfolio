import styles from "./Skills.module.css";
import js from "./../../assets/s/JavaScriptPNG.png";

const SkillCard = ({ skillName }) => {
  // let skillUrl = skillName;
  // skillUrl = skillUrl.toLowerCase();
  // skillUrl = skillUrl.replace(" ", "-");
  // console.log(skillUrl);
  return (
    <div className={styles["skill"]}>
      {/* <img alt="skill" src={require(`./../../assets/skills/${skillUrl}.png`)} /> */}
      <a className={styles.circle}>
        <img alt="skill" src={js} className={`${styles.icon} ${styles.fab}`} />
      </a>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
