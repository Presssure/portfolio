import styles from "./Skills.module.css";

const SkillCard = ({ skillName, skillColor }) => {
  let skillUrl = skillName;
  skillUrl = skillUrl.toLowerCase();
  skillUrl = skillUrl.replace(" ", "-");

  console.log(skillColor);

  const color = {
    // Define the hover style
    ":before": {
      backgroundColor: "#e44d26",
      content: "",
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      height: "100%",
      transition: ".5s",
      zIndex: "2",
      // Add any other hover styles as needed
    },
  };

  return (
    <div className={styles["skill"]}>
      <a className={styles.circle} style={color}>
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
