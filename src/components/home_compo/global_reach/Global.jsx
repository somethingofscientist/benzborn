import React from 'react'
import styles from './Global.module.css';
import oldman from '../../images/olman.svg'
import worker from '../../images/worker.svg'

const Global = () => {
    return (
        <>
            <div className={styles.map_flexbox}>
                <div className={styles.map_heading}>
                    Global reach,
                    local impact.
                </div>
                <div className={styles.map_sub_heading}>
                    Global reach local impact is about making a difference on a global scale through individual actions at a local level. It's about recognizing the interconnectedness of our world and taking responsibility for our impact, no matter how small it may seem.
                </div>
            </div>
            <div className={styles.global_container}>
                <div className={styles.global_image_container}>
                    <img src={oldman} alt="man" />
                </div>
                <div className={styles.global_image_container2}>
                    <img src={worker} alt="man" />
                </div>
                <div className={styles.global_image_text_container}>
                    <p>
                        Welcome to our packaging company, where we specialize in providing innovative and high-quality packaging solutions for businesses of all sizes.
                        We believe in the importance of sustainability and strive to make our packaging as eco-friendly as possible. We use recyclable materials and employ sustainable manufacturing processes to minimize our impact on the environment.
                    </p>

                    <div className={styles.pack_button}>
                        PACK WITH US
                    </div>
                </div>
            </div>
        </>
    )
}

export default Global