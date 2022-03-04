import React from 'react';

import styles from './Page.module.css';
import NavBar from './Navbar/Navbar';

const Page = () => {

    return (
        <div className={styles.page}>
            <NavBar />
        </div>

    );
}

export default Page;