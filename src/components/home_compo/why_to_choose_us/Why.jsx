import React, { useState } from 'react'
import styles from './Why.module.css';
import team from '../../images/team.svg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Why = () => {
    const [counter, setCounter] = useState(false);

    return (
        <>
            <div className={styles.right}>
                <div className={styles.map}>
                    <div className={styles.map_flexbox}>
                        <div className={styles.map_heading}>
                            Why to 
                            choose us.
                        </div>
                        <div className={styles.map_sub_heading}>
                            Our packaging products are environmentally conscious, innovative, and cater to a variety of industries.
                        </div>
                    </div>
                    <div className={styles.global_container}>
                        <div className={styles.global_image_text_container}>
                            <p>
                                Welcome to our packaging company, where we specialize in providing innovative and high-quality packaging solutions for businesses of all sizes.
                                We believe in the importance of sustainability and strive to make our packaging as eco-friendly as possible. We use recyclable materials and employ sustainable manufacturing processes to minimize our impact on the environment.
                            </p>

                            <div className={styles.pack_button}>
                                JOIN OUR TEAM
                            </div>
                        </div>
                        <div className={styles.global_image_container}>
                            <img src={team} alt="man" />
                        </div>
                    </div>
                    <div className={styles.why_para}>
                        Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.
                    </div>

                    <div className={styles.counter_section}>
                        <div className={styles.counter}>
                            <div className={styles.counter_subheading}>
                                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}
                                >
                                    <h1>
                                        {counter &&
                                            <CountUp start={0} end={5} duration={1} delay={0} />
                                        } + 
                                    </h1>
                                </ScrollTrigger>
                                <div className={styles.counter_heading}>
                                    Manufacturing Units
                                </div>
                                <p>
                                    Manufacturing units play a vital role in creating products that cater to the needs of consumers
                                </p>
                            </div>
                        </div>
                        <div className={styles.counter2}>
                            <div className={styles.counter_subheading}>
                                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}
                                >
                                    <h1>
                                        {counter &&
                                            <CountUp start={0} end={23} duration={1} delay={0} />
                                        } +
                                    </h1>
                                </ScrollTrigger>
                                <div className={styles.counter_heading}>
                                    Warehouses
                                </div>
                                <p>
                                    Warehouses are essential facilities for storing and organizing goods before they are distributed to customers.
                                </p>
                            </div>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counter_subheading}>
                                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}
                                >
                                    <h1>
                                        {counter &&
                                            <CountUp start={0} end={2500} duration={1} delay={0} />
                                        } +
                                    </h1>
                                </ScrollTrigger>
                                <div className={styles.counter_heading}>
                                    Happy Customers
                                </div>
                                <p>
                                    Happy customers are the lifeblood of any successful business.
                                </p>
                            </div>
                        </div>
                        <div className={styles.counter2}>
                            <div className={styles.counter_subheading}>
                                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}
                                >
                                    <h1>
                                        {counter &&
                                            <CountUp start={0} end={250} duration={1} delay={0} />
                                        } +
                                    </h1>
                                </ScrollTrigger>
                                <div className={styles.counter_heading}>
                                    Products
                                </div>
                                <p>
                                    Products are goods or services that are created and offered for sale to meet the needs and wants of customers.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Why