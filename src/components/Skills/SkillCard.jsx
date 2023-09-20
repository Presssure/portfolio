import styles from "./Skills.module.css";
import test from "./../../assets/js.png";

const SkillCard = ({ skillName, skillUrl }) => {
  return (
    <div className="skill">
      <img alt="skill" src={skillUrl} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
