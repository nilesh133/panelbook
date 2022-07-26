import React from 'react'
import styles from "./page21.module.css"

// Images import
import image1 from "./images/page21_image1.png"
import image2 from "./images/page21_image2.png"
import image3 from "./images/page21_image3.png"
import image4 from "./images/page21_image4.png"
import image5 from "./images/page21_image5.png"

const Page21 = () => {
  return (
    <div className={styles.page21}>
        <div className={styles.page21_images}>
            <img src={image1} width = "638px" height = "492px" style = {{objectFit : "cover"}}/>
            <img src={image2} width = "573px" height = "409.5px" style = {{objectFit : "cover"}}/>
            <img src={image3} width = "326px" height = "484px" style = {{objectFit : "cover"}}/>
            <img src={image4} width = "577px" height = "351.13px" style = {{objectFit : "cover"}}/>
            <img src={image5} width = "709px" height = "672.77px" style = {{objectFit : "cover"}}/>
        </div>
        <div className = {styles.page21_content}>
          <p>Mirats Insights delivers you best</p>
          <p>quality sample in different</p>
          <p>languages with in-depth profiling</p>
          <p>in Asia Pacific.</p>
        </div>
    </div>
  )
}

export default Page21