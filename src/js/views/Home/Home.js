import React, { useContext } from 'react';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';


const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section className={styles.section}>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <h1>Welcome to JobTrial</h1>
            </div>

        </section>
    );
};

export default Home;