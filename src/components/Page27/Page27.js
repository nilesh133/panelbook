import React from 'react'
import styles from "./page27.module.css"
const Page27 = () => {
    const countrydata = [
        {
            country: "Canada",
            panelcount: "324293",
            male: "42%",
            female: "58%",
            _18_24: "31%",
            _25_34: "26%",
            _36_44: "18%",
            _45_54: "11%",
            _55: "14%",
            mobile: "38%"
        },
        {
            country: "United States",
            panelcount: "2316294",
            male: "38%",
            female: "62%",
            _18_24: "28%",
            _25_34: "25%",
            _36_44: "21%",
            _45_54: "12%",
            _55: "14%",
            mobile: "43%"
        },
    ]
    return (
        <div className={styles.page27}>
            <div className={styles.page27_heading}>
                <h1>02</h1>
                <div className={styles.page27_heading_para}>
                    <p>NORTH</p>
                    <p>AMERICA</p>
                </div>
            </div>
            <div className={styles.page27_subheading}>
                <h1>NORTH AMERICA - 2.5 million</h1>
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
                    {
                        countrydata.map((data) => (
                            <tr>
                                <td>{data.country}</td>
                                <td>{data.panelcount}</td>
                                <td>{data.male}</td>
                                <td>{data.female}</td>
                                <td>{data._18_24}</td>
                                <td>{data._25_34}</td>
                                <td>{data._36_44}</td>
                                <td>{data._45_54}</td>
                                <td>{data._55}</td>
                                <td>{data.mobile}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Page27