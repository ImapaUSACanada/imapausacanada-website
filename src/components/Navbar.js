import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <img src="/logo.webp" alt="IMAPA USA-Canada Logo" />
                </a>
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#departments">Departments</a></li>
            </ul>
            <button className={styles.menuButton}>☰</button>
        </nav>
    );
}

export default Navbar;
