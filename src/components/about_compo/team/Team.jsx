
import member from '../../images/imember.svg';
import styles from './Team.module.css';
import React, { Component } from "react";
import Slider from "react-slick";

const Team = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        swipe: true,
        // autoplay: false,
    };
    return (
        <div className={styles.team_container} id="section5">
            <div className={styles.about_compo_heading}>Our Team </div>

            <Slider
                {...settings}
            >

                <div className={styles.team_image} >
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>

                <div className={styles.team_image} >
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>

                <div className={styles.team_image} >
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>

                <div className={styles.team_image} >
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>

                <div className={styles.team_image} >
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>

            </Slider>


            <div className={styles.join_our_team}>
                Join Our Team
            </div>
        </div>
    );
};

export default Team;
