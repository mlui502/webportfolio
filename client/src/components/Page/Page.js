import React from 'react';

import styles from './Page.module.css';
import NavBar from './Navbar/Navbar';
import Menu from './Menu/Menu';

const Page = ({children}) => {

    return (
        <div className={styles.page}>
            <NavBar />
            <Menu />
            {children}
        </div>

    );
}

export default Page;