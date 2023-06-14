import React from 'react'
import styles from './Contract_packaging.module.css'
import engine from '../../images/war.svg';
import Slider from '../horizontal_slider/Slider';

const Contract_packaging = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section4'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>4</div>
                    <div className={styles.auto_letter}>Contract packaging  </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                        <div className={styles.auto_pack}>
                            Pack With Us
                        </div>
                    </div>
                    <div className={styles.auto_img_text}>
                        Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.
                    </div>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default Contract_packaging