import styles from './NavBar.module.css';
import {slide as Menu} from 'react-burger-menu';
import React from 'react';
import {Link} from 'react-router-dom';


// needs to be a class based component as we need to keep track of our url from our location props
class NavBar extends React.Component{

    render(){

        return(
        <Menu>
        {/* try to never use a tags in a react router application */}
            {/* <a id='home' className={styles.menuItem} href='/'>
                Home
            </a>
            <a id='about' className={styles.menuItem} href='/about'>
                About
            </a>
            <a id='projects' className={styles.menuItem} href='/projects'>
                Projects
            </a> */}
            <Link className={styles.menuItem} to='/'>Home</Link>
            <Link className={styles.menuItem} to='/about'>About</Link>
            <Link className={styles.menuItem} to='/projects'>Projects</Link>
            <Link className={styles.menuItem} to='/skills'>Skills</Link>
            <Link className={styles.menuItem} to='/contact'>Contact</Link>
        </Menu>
        )
    }
}

export default NavBar;