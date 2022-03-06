import React from 'react';
import { Grow } from '@material-ui/core';

import Page from '../Page/Page';
import styles from './About.module.css'
import logo from '../../images/people.png';

const About = () => {

    return(
        <Page>
            <Grow in>
                <div className={styles.profile}>
                    <img src={logo} alt="Logo" className={styles.profileImage}/>   

                    <div className={styles.profileText}>
                        <div className={styles.header}>
                            Hi i'm Anton Lui
                        </div>
                        <p className={styles.text}>
                            I am currently a Part III Software engineering student at The University of Auckland. Currently I am looking for software internships to develop my career
                        </p>
                        <p className={styles.text}>
                            I would like to code something that will be used in the world. I am interested in all things software
                        </p>
                    </div>
                </div>
            </Grow>
        </Page>
    );
}
export default About;