import React from 'react'
import styles from "./page4.module.css"
const Page4 = () => {
    return (
        <div className={styles.page4}>
            <div className={styles.page4_heading}>
                <span>A Letter from </span>
                <span>Ayaan Ali</span>
            </div>
            <div className={styles.page4_bottom}>
                <div className={styles.page4_bottom_left}>
                    <h3>No year challenged us like this one, and no year taught us more.
                        A pandemic changed everything about how we live and work, and most importantly, reinforced just how essential it is to put people’s health first in everything we do.</h3>
                    <div className={styles.page4_bottom_left_paras}>
                        <div className={styles.page4_bottom_left_paraleft}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet quam ut metus mattis, ut varius lectus lobortis. Aliquam vestibulum, leo vitae malesuada aliquam, tortor arcu efficitur lorem, vel tempus lacus libero et erat. Ut dictum, augue vitae pharetra convallis, urna felis tincidunt leo, ut aliquam neque tellus id leo. Curabitur sodales feugiat arcu a vestibulum.
                                <br />
                                <br />
                                Aenean iaculis, felis et ultrices gravida, quam metus maximus neque, tristique dapibus augue magna sit amet ex. Pellentesque nec purus quis quam pharetra scelerisque et vitae metus. Pellentesque dui odio, pulvinar in euismod ac, sodales ut magna. Praesent quis fermentum mi. Nunc efficitur orci elit. Sed facilisis fermentum faucibus. Nullam interdum nisl orci, vel hendrerit lacus hendrerit id. Pellentesque sodales congue urna, at facilisis dolor vestibulum in.</p>

                        </div>
                        <div className={styles.page4_bottom_left_pararight}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet quam ut metus mattis, ut varius lectus lobortis. Aliquam vestibulum, leo vitae malesuada aliquam, tortor arcu efficitur lorem, vel tempus lacus libero et erat. Ut dictum, augue vitae pharetra convallis, urna felis tincidunt leo, ut aliquam neque tellus id leo. Curabitur sodales feugiat arcu a vestibulum.
                                <br />
                                <br />
                                Aenean iaculis, felis et ultrices gravida, quam metus maximus neque, tristique dapibus augue magna sit amet ex. Pellentesque nec purus quis quam pharetra scelerisque et vitae metus. Pellentesque dui odio, pulvinar in euismod ac, sodales ut magna. Praesent quis fermentum mi. Nunc efficitur orci elit. Sed facilisis fermentum faucibus. Nullam interdum nisl orci</p>
                                <span>—Ayaan Ali</span>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.page4_bottom_right}>
                    <div className={styles.page4_bottom_right_image}>

                    </div>
                    <p>Ayaan leads Mirats Insights’s global sales and operations, which includes supply chain and sales innovation.</p>
                </div>
            </div>
        </div>
    )
}

export default Page4