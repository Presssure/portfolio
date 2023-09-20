import styles from './Header.module.css';


const Header=({header, details})=>{

    return(
        <div className={styles['header-container']}>
            <h1>{header}</h1>
            <p>{details}</p>
        </div>
    )
}

export default Header;