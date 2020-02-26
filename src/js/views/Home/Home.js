import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';

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
                        <p className={styles.landingSlogan}>To know if i know, Trial me</p>
                        <button className={styles.LearnMoreButton}>Learn More</button>
                        <Link to="/login">
                            <button className={styles.SignUpButton}>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>

        <section className={styles.section2}>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className="row" style={{minHeight: windowHeight}}>
                    <div ClassName="col-6" style={{width: "655px"}}>
                        <h2 className={styles.aboutUsHeading}>About Us</h2>
                    </div>
                    <div ClassName={styles.aboutUsGraphicDiv} style={{width: "655px", backgroundColor: "#588B8B"}}>
                        <p>graphic goes here</p>
                    </div>
                
                </div>
            </div>

        </section>
    </>
    );
};

export default Home;