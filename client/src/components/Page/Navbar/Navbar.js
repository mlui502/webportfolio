import React from 'react';
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavBar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>Home</Link> 
                <Link to="/About" className={styles.link}>About</Link> 
                <Link to="/Experience" className={styles.link}>Experience</Link> 
                <Link to="/Projects" className={styles.link}>Projects</Link> 
                <Link to="/Contact" className={styles.link}>Contact</Link> 
            </div>
        </div>
    );
}

export default NavBar;