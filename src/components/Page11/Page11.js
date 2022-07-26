import React from 'react'
import styles from "./page11.module.css"
const Page11 = () => {
  return (
    <div className={styles.page11}>
      <div className={styles.page11_section}>
        <div className={styles.page11_section_left}>
          <h3>Section</h3>
        </div>
        <div className={styles.page11_section_right}>
          <h3>01</h3>
          <h3>02</h3>
          <h3>03</h3>
          <h3>04</h3>
          <h3>05</h3>
          <h3>06</h3>
          <h3>07</h3>
        </div>
      </div>
      <div className={styles.page11_heading}>
        <h1>01 {`>`} Supplier Responsiiblity</h1>
      </div>
      <div className={styles.page11_subheading}>
        <p>A global opportunity</p>
        <p>The highest standards</p>
        <p>Accountability at every step</p>
        <p>Working in partnerships</p>
      </div>
      <div className={styles.page11_content}>
        <div className={styles.page11_content_left}>
          <h3>We are deeply committed to working with our suppliers to ensure that the people in our supply chain are safe at work, that they are treated with dignity and respect, and that our planet is protected throughout the process of building our products. This responsibility goes far beyond compliance: it is a collective responsibility that includes supporting our suppliers in achieving the highest standards of labor, human rights, environmental protection, and health and safety.</h3>
        </div>
        <div className={styles.page11_content_right}>
          <h1>Mirats</h1>
          <h1>Insights</h1>
        </div>
      </div>
    </div>
  )
}

export default Page11