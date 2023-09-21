import styles from "./Projects.module.css";
import appStyles from './../../App.module.css';
import Header from './../Header/Header';
import FooterLink from './../FooterLink/FooterLink';

const Projects = () => {
  return (
    <div className={appStyles['section-container']}>
      <Header header='My Projects.' details="Here are a few things i've worked on, check the out"/>
      <FooterLink phrase='Check out ' link="my skills!" toAddress={'/skills'}/>
    </div>
  );
};

export default Projects;
