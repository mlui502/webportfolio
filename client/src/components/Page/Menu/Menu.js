import React from 'react';
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Menu.module.css';

const Menu = () =>{

    const openMenu = () =>{
        
    }

    return(
        <GiHamburgerMenu onClick={openMenu} className={styles.menu} />
    )
}

export default Menu;