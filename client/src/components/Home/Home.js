import React from 'react';

import Page from '../Page/Page';

import styles from './Home.module.css'

const Home = () => {

    return(
        <Page>
            <div className={styles.title}>
                <div className={styles.text}>Hello :)</div>
                <div className={styles.headerText}>I'm Anton.</div>
                {/* <div className={styles.text}>I like coding cool things</div> */}
                <div className={styles.subText}>I'm in my Penultimate Year of</div>
                <div className={styles.subText}>Software Engineering at UoA 🎓</div>
            </div>
        </Page>
    );
}
export default Home;