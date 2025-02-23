import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href='/'>
                    <img src='/logo.webp' alt='IMAPA USA-Canada Logo' />
                </a>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
                <li>
                    <a href='#about' onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#contact' onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#departments' onClick={() => setMenuOpen(false)}>
                        Departments
                    </a>
                </li>
            </ul>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </button>
        </nav>
    );
}

export default Navbar;
