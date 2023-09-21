import styles from "./Skills.module.css";

const SkillCard = ({ skillName }) => {
  let skillUrl = skillName;
  skillUrl = skillUrl.toLowerCase();
  skillUrl = skillUrl.replace(" ", "-");
  console.log(skillUrl);
  return (
    <div className={styles["skill"]}>
      <img alt="skill" src={require(`./../../assets/skills/${skillUrl}.png`)} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
