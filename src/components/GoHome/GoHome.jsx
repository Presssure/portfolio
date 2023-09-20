import styles from './GoHome.module.css';
import homeWhite from './../../assets/home_white.png';
import homeBlack from './../../assets/home_black.png';

// Only to test programtic naigation
const GoHome = ()=>{

    return(
        <button>
            <img className={styles['go-home-btn']} src={homeBlack} alt='home icon'/>
        </button>
    );

}

export default GoHome;