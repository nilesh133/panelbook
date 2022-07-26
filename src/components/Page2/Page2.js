import React from 'react'
import styles from "./page2.module.css"
const Page2 = () => {
  return (
    <div className={styles.page2}>
        <div className={styles.page2_left}>
            <h1>
            “Mirats Insights is a research and technology company, but we never forget that human minds imagine the research we do; insights are created by human hands and are meant to improve human lives.”
            </h1>
        </div>
        <div className={styles.page2_right}>
            <p>
            - Mayank Patel, CEO
            </p>
        </div>
    </div>
  )
}

export default Page2