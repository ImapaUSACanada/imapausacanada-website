import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/' onClick={() => setMenuOpen(false)}>
                    <img src='/logo.webp' alt='IMAPA USA-Canada Logo' />
                </Link>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
                <Link to='/about' onClick={() => setMenuOpen(false)}>
                    About
                </Link>
                <Link to='/contact' onClick={() => setMenuOpen(false)}>
                    Contact
                </Link>
                <Link to='/departments' onClick={() => setMenuOpen(false)}>
                    Departments
                </Link>
                <Link to='/events' onClick={() => setMenuOpen(false)}>
                    Events
                </Link>
                <Link to='/auth' onClick={() => setMenuOpen(false)}>
                    Login
                </Link>
            </ul>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </button>
        </nav>
    );
}

export default Navbar;
