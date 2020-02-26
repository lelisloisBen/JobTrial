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
                        <div className="container" style={{width:"500px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Fames ac turpis egestas integer eget aliquet. Mi proin sed libero enim sed faucibus turpis in. Placerat in egestas erat imperdiet 
                            sed euismod nisi. Eget nulla facilisi etiam dignissim. Et molestie ac feugiat sed lectus. Dolor sit amet consectetur adipiscing elit pellentesque. 
                            Et ultrices neque ornare aenean euismod elementum. Tellus molestie nunc non blandit. Et odio pellentesque diam volutpat commodo sed egestas. 
                            Placerat duis ultricies lacus sed turpis tincidunt id. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus non enim praesent 
                            elementum facilisis leo vel. Mi proin sed libero enim sed faucibus turpis in. Amet est placerat in egestas.
                        </div>
                        <button className={styles.aboutUsButton}>Read More</button>
                    </div>
                    <div ClassName={styles.aboutUsGraphicDiv} style={{width: "655px", backgroundColor: "#588B8B"}}>
                
                    </div>
                
                </div>
            </div>

        </section>
    </>
    );
};

export default Home;