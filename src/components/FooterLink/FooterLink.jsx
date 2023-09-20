import styles from './FooterLink.module.css';
import {Link} from 'react-router-dom';

const FooterLink =({phrase, link, toAddress})=>{

    return(
        <div className={styles['footer-link']}>
            {phrase}
            <Link to={toAddress} className={styles['footer-link-element']}>
                {link}
            </Link>
        </div>
    )
}

export default FooterLink;