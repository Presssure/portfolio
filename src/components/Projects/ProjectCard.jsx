import styles from "./Projects.module.css";

const ProjectCard = ({ projectName, projectDescription, projectUrl }) => {
  let imageUrl = projectName;
  imageUrl = imageUrl.toLowerCase();
  imageUrl = imageUrl.replace(" ", "-");
  console.log(imageUrl);
  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <a href={projectUrl} className={styles["project-external-link"]}>
          <img
            src={require(`./../../assets/projects/${imageUrl}.png`)}
            alt="project"
            className={styles["project-image"]}
          />
        </a>
      </div>
      <div className={styles["project-details-container"]}>
        <h2 classname={styles["project-heading"]}>{projectName}</h2>
        <p className={styles["project-details"]}>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
