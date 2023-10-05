import styles from "./Projects.module.css";
import notDeployedImage from "./../../assets/projects/not-deployed.png";
import { useState } from "react";

const ProjectCard = ({
  projectName,
  projectDescription,
  projectUrl,
  deployed,
}) => {
  let imageUrl = projectName;
  imageUrl = imageUrl.toLowerCase();
  imageUrl = imageUrl.replace(" ", "-");

  // console.log(!deployed?"styles":"not");
  // const greyFilter=

  const [changeImage, setChangeImage] = useState(false);

  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <a
          href={deployed ? projectUrl : null}
          className={styles["project-external-link"]}
          target="_blank"
        >
          <img
            // src={require(`./../../assets/projects/${imageUrl}.png`)}
            src={
              !deployed
                ? changeImage
                  ? notDeployedImage
                  : require(`./../../assets/projects/${imageUrl}.png`)
                : require(`./../../assets/projects/${imageUrl}.png`)
            }
            alt="project"
            className={`${styles["project-image"]} ${
              deployed === false ? styles["not-deployed"] : null
            }`}
            onMouseOver={() => setChangeImage(true)}
            onMouseOut={() => setChangeImage(false)}
          />
        </a>
      </div>
      <div className={styles["project-details-container"]}>
        <h2
        // className={styles["project-heading"]}
        >
          {projectName}
        </h2>
        <p className={styles["project-details"]}>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
