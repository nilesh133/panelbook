import React from 'react'
import styles from "./page27.module.css"
const Page27 = () => {
    return (
        <div className={styles.page27}>
            <div className={styles.page27_heading}>
                <h1>02</h1>
                <div className={styles.page27_heading_para}>
                    <p>ASIA</p>
                    <p>PACIFIC</p>
                </div>
            </div>
            <div className={styles.page27_subheading}>
                <h1>ASIA PACIFIC - 2.5 million</h1>
            </div>
            <div className={styles.page27_table}>
                <table>
                    <tr>
                        <th>Country</th>
                        <th>Panel Count</th>
                        <th>Male</th>
                        <th>Female</th>
                        <th>18-24 yrs</th>
                        <th>25-34 yrs</th>
                        <th>35-44 yrs</th>
                        <th>45-54 yrs</th>
                        <th>55+ yrs</th>
                        <th>Mobile</th>
                    </tr>
                    <tr>
                        <td>Australia</td>
                        <td>158,234</td>
                        <td>44%</td>
                        <td>56%</td>
                        <td>44%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                    </tr>
                    <tr>
                        <td>China</td>
                        <td>158,234</td>
                        <td>44%</td>
                        <td>56%</td>
                        <td>44%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                        <td>56%</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Page27