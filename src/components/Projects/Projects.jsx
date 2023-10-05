import styles from "./Projects.module.css";
import appStyles from "./../../App.module.css";
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className={appStyles["section-container"]}>
      <Header
        header="My Projects."
        details="Here are a few things i've worked on, check the out"
      />

      <div className={styles["project-cards-container"]}>
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            imageUrl,
            projectUrl,
            deployed,
          }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                imageUrl={imageUrl}
                projectUrl={projectUrl}
                deployed={deployed}
                key={projectName}
              />
            );
          }
        )}
      </div>

      <FooterLink phrase="Check out " link="my skills!" toAddress={"/skills"} />
    </div>
  );
};

export default Projects;
