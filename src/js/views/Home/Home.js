import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';

import hiring from "../../../img/hiring.png"
import deal from "../../../img/deal.png"

const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
    <>
        <section className={styles.section}>
        
            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className="row">
                    <div className="col-6 mobile"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className={styles.landingheading}>GewJots</h1>
                        <p className={styles.landingSlogan}>To know if i know, Trial me</p>
                        <Link to="/" type="button" className={styles.LearnMoreButton}>
                            Learn More
                        </Link>
                        <Link to="/register" type="button" className={styles.SignUpButton}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

        </section>

        <section className={styles.section2}>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2 className={styles.aboutUsHeading}>About Us</h2>
                        <div className="container">
                        For example, if you killed your grandfather, you'd cease to exist! 
                        It must be wonderful. Oh Leela! You're the only person I could turn to; 
                        you're the only person who ever loved me. You don't know how to do any of those.
                        <br/>
                        <br/>
                        Bender, quit destroying the universe! Yeah, and if you were the pope they'd be all, "Straighten your pope hat. 
                        " And "Put on your good vestments.
                        " Now Fry, it's been a few years since medical school, so remind me.
                        Disemboweling in your species: fatal or non-fatal?
                        </div>
                        <button className={styles.aboutUsButton}>Read More</button>
                    </div>
                    <div className={["col-sm-12 col-md-6 col-lg-6", styles.aboutUsGraphicDiv].join(' ')}>
                            hey
                    </div>
                
                </div>
            </div>

        </section>

        <section className={styles.section3}>
        
            <div className="text-center" style={{minHeight: windowHeight}}>
                <div className="row">
                    <div className="col-6">
                         <div className={["card", styles.serviceCard].join(' ')}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={hiring} className={styles.employeeImg} alt=""/>
                                </h5>
                                <button className={styles.aboutUsButton}>Job hunting?</button>
                            </div>
                         </div>
                    </div>

                    <div className="col-6">
                        <div className={["card", styles.serviceCard].join(' ')}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={deal} className={styles.employeeImg} alt=""/>
                                </h5>
                                <button className={styles.aboutUsButton}>Hiring?</button>
                            </div>
                         </div>
                        
                    </div>
                </div>
            </div>

        </section>
    </>
    );
};

export default Home;


 