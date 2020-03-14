import React from 'react';
import styles from './Worker.module.css';

const Worker = () => {
    return (
        <section className={styles.section}>
            <div className="container pt-2">
                <label htmlFor="firstname">First Name:</label>
                <input id="firstname" type="text" placeholder="First Name" />
                <br/>
                <label htmlFor="lastname">Last Name:</label>
                <input id="lastname" type="text" placeholder="Last Name" />
                <br/>
                <label htmlFor="birthdate">Birth Date:</label>
                <input id="birthdate_year" type="number" placeholder="1984" />
                <input id="birthdate_month" type="number" placeholder="04" />
                <input id="birthdate_day" type="number" placeholder="27" />
                <br/>
                <label htmlFor="identification">Legal Identification:</label>
                <input id="identification" type="File" placeholder="Import Official Identification" />
                <br/>
                <label htmlFor="ssn">Social Security Number (4 Digit only)</label>
                <input id="ssn" type="number" placeholder="1234" />
                <br/>
                <label htmlFor="language">Language:</label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        English
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Spanish
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        French
                    </label>
                </div>
                <br/>
                <label className="mr-1" htmlFor="category">Category</label>
                <select id="category" className="mr-5">
                    <option value="cat1">category one</option>
                    <option value="cat2">category two</option>
                    <option value="cat3">category three</option>
                </select>

                <label className="mr-1" htmlFor="position">Position</label>
                <select id="position" className="mr-5">
                    <option value="pos1">Position one</option>
                    <option value="pos2">Position two</option>
                    <option value="pos3">Position three</option>
                </select>
                <br/>

                <label className="mr-1" htmlFor="experience">Experience:</label>
                <select id="experience" className="mr-5">
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="3">+5 years</option>
                    <option value="3">+10 years</option>
                    <option value="3">Inexperienced</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>
                <br/>
                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

                <label className="mr-1" htmlFor=""></label>
                <select id="" className="mr-5">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                </select>

            </div>

        </section>
    )
}

export default Worker;