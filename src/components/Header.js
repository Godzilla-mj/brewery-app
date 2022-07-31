import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'

const Header = () => {

    return(
        <nav className={styles.main}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/nyc-list" className={styles.link}>NYC Breweries</Link>
        </nav>
    )
}

export default Header;