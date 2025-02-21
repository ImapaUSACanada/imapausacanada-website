import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>IMAPA</div>
            <ul className={styles.navLinks}>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <button className={styles.menuButton}>☰</button>
        </nav>
    );
}

export default Navbar;
