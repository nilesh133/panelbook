import React from 'react'
import styles from "./page1.module.css"

// Image import

import image1 from "./images/page1_image1.png"
import image2 from "./images/page1_image2.png"
import image3 from "./images/page1_image3.png"
import image4 from "./images/page1_image4.png"
import image5 from "./images/page1_image5.png"
import logo from "./images/mirats_logo.png"

const Page1 = () => {
    return (
        <div className={styles.page1}>
            <div className={styles.page1_images}>
                <img src={image5} alt="" width="731px" height="280px" style={{ objectFit: "cover" }} />
                <img src={image4} alt="" width="213px" height="279px" style={{ objectFit: "cover" }} />
                <img src={image3} alt="" width="162px" height="250px" style={{ objectFit: "cover" }} />
                <img src={image2} alt="" width="629px" height="353px" style={{ objectFit: "cover" }} />
                <img src={image1} alt="" width="340px" height="306px" style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.page1_logo}>
                <img src={logo} alt="" width="136px" height="77px" style={{ objectFit: "cover" }}/>
            </div>
            <div className={styles.page1_heading}>
                <h1>Our People and</h1>
                <h1>Audience Network</h1>
                <h1>Book</h1>
                <p>2022 Global Panel Book</p>
            </div>
        </div>
    )
}

export default Page1