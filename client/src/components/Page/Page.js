import React from 'react';

import styles from './Page.module.css';
import NavBar from './Navbar/Navbar';

const Page = ({children}) => {

    return (
        <div className={styles.page}>
            <NavBar />
            {children}
        </div>

    );
}

export default Page;