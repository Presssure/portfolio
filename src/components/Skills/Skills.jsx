import styles from "./Skills.module.css";
import appStyles from "./../../App.module.css";
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import skillsVector from "./../../assets/skills_vector.png";
import { skillList } from "./../../assets/skillsData";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className={appStyles["section-container"]}>
      <Header
        header="My Skills."
        details="Passionate about new technologies, I keep"
      />

      <div className={styles["skill-card-container"]}>
        {skillList.map((skill) => {
          return (
            <SkillCard
              skillName={skill.skillName}
              skillColor={skill.skillColor}
            />
          );
        })}
        {/* <SkillCard skillname="javascript" /> */}
      </div>

      {/* <a href="https://icons8.com">Icons8</a> */}
      <FooterLink phrase="Get in " link="touch." />
      <div className={styles["skills-vector-frame"]}>
        <img
          src={skillsVector}
          alt="skills"
          className={styles["skills-vector"]}
        />
      </div>
    </div>
  );
};

export default Skills;
