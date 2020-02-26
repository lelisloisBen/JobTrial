import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';
import { Link } from 'react-router-dom';

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
                <div className="row" style={{minHeight: windowHeight}}>
                    <div ClassName="col-6" style={{width: "655px"}}>
                        <h2 className={styles.aboutUsHeading}>About Us</h2>
                        <div className="container" style={{width:"500px"}}>
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
                    <div ClassName={styles.aboutUsGraphicDiv} style={{width: "655px", backgroundColor: "#588B8B"}}>
                
                    </div>
                
                </div>
            </div>

        </section>

        <section className={styles.section3}>
        
            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <h2 className={styles.servicesHeading}> Our Services</h2>
            </div>

        </section>
    </>
    );
};

export default Home;