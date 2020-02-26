import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';

import landingImage from "../../../img/gewjotslandingimg.jpeg";

const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
    <>
        <section className={styles.section}>
        
            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h1 className={styles.landingheading}>GewJots</h1>
                        <p>To know if i know, Trial me</p>
                        <button className={styles.LearnMoreButton}>Learn More</button>
                        <button className={styles.signUpButton}>Sign Up</button>
                    </div>
                </div>
            </div>

        </section>

        <section className={styles.section2}>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                
            </div>

        </section>
    </>
    );
};

export default Home;