import React from 'react'
import styles from "./page15.module.css"
const Page15 = () => {
  return (
    <div className={styles.page15}>
        <div className={styles.page15_left}>
            <h1>Our approach to continuous supplier engagement</h1>
            <p>We are deeply committed to working with our suppliers to ensure that the people in our supply chain are safe at work</p>
        </div>
        <div className={styles.page15_right}>
            <div className={styles.page15_right_outercircle}>
                <div className={styles.page15_right_innercircle}></div>
                <div className={styles.page15_right_innercircle}></div>
                <div className={styles.page15_right_innercircle}></div>
                <div className={styles.page15_right_innercircle}></div>
                <div className={styles.page15_right_innercircle}></div>
            </div>
        </div>
    </div>
  )
}

export default Page15