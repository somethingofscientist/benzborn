import React from 'react'
import Marquee from "react-fast-marquee";
import stamp_paper from '../../images/history1.svg'
import styles from './Marquee.module.css';
import timeline from '../../images/Frame 1000004628.svg'


const MarqueeHistory = () => {
    return (
        <>
            <div className={styles.product_container} id="section1">
                <div className={styles.products_tag}>
                    <Marquee
                        speed={200}
                        loop={0}
                    >
                        <p>History &nbsp;	 </p>
                        <p>History &nbsp;	 </p>
                    </Marquee>
                </div>
            </div>

            <div className={styles.product_image_container}>
                <div className={styles.product_timeline}>
                    <img src={timeline} alt="" />
                </div>
                <div className={styles.award_img}>
                    <img src={stamp_paper} alt="" />
                    <img src={stamp_paper} alt="" />
                    <img src={stamp_paper} alt="" />
                    <img src={stamp_paper} alt="" />
                </div>
            </div>
        </>
    )
}

export default MarqueeHistory