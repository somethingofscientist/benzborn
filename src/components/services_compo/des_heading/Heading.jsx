import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/service_heading.svg'

const heading_header_industry = () => {
    return (
        <>
            <div className={styles.header_bg}>
                <img src={header_heading} alt="" />
                <div className={styles.header}>
                    Services
                </div>
            </div>
        </>
    )
}

export default heading_header_industry