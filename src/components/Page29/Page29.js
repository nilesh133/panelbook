import React from 'react'
import styles from "./page29.module.css"
const Page29 = () => {
    const countrydata = [
        {
            country: "Argentina",
            panelcount: "151774",
            male: "43%",
            female: "57%",
            _18_24: "38%",
            _25_34: "29%",
            _36_44: "18%",
            _45_54: "9%",
            _55: "6%",
            mobile: "58%"
        },
        {
            country: "Brazil",
            panelcount: "659024",
            male: "42%",
            female: "58%",
            _18_24: "38%",
            _25_34: "32%",
            _36_44: "18%",
            _45_54: "7%",
            _55: "4%",
            mobile: "63%"
        },
        {
            country: "Chile",
            panelcount: "120782",
            male: "35%",
            female: "65%",
            _18_24: "39%",
            _25_34: "33%",
            _36_44: "16%",
            _45_54: "8%",
            _55: "4%",
            mobile: "62%"
        },
        {
            country: "Colombia",
            panelcount: "108114",
            male: "42%",
            female: "58%",
            _18_24: "42%",
            _25_34: "30%",
            _36_44: "16%",
            _45_54: "8%",
            _55: "4%",
            mobile: "56%"
        },
        {
            country: "Ecuador",
            panelcount: "13674",
            male: "51%",
            female: "49%",
            _18_24: "39%",
            _25_34: "28%",
            _36_44: "21%",
            _45_54: "8%",
            _55: "4%",
            mobile: "44%"
        },
        {
            country: "Mexico",
            panelcount: "451017",
            male: "53%",
            female: "47%",
            _18_24: "49%",
            _25_34: "30%",
            _36_44: "14%",
            _45_54: "5%",
            _55: "2%",
            mobile: "63%"
        },
        {
            country: "Peru",
            panelcount: "85277",
            male: "45%",
            female: "55%",
            _18_24: "43%",
            _25_34: "34%",
            _36_44: "15%",
            _45_54: "6%",
            _55: "2%",
            mobile: "59%"
        },
        {
            country: "Uruguay",
            panelcount: "1280",
            male: "44%",
            female: "56%",
            _18_24: "36%",
            _25_34: "28%",
            _36_44: "20%",
            _45_54: "9%",
            _55: "6%",
            mobile: "65%"
        },
        {
            country: "Venezuela",
            panelcount: "3890",
            male: "54%",
            female: "46%",
            _18_24: "27%",
            _25_34: "32%",
            _36_44: "18%",
            _45_54: "14%",
            _55: "9%",
            mobile: "32%"
        },
    ]

    return (
        <div className={styles.page29}>
            <div className={styles.page29_heading}>
                <h1>02</h1>
                <div className={styles.page29_heading_para}>
                    <p>LATAM</p>
                </div>
            </div>
            <div className={styles.page29_subheading}>
                <h1>LATAM - 2.5 million</h1>
            </div>
            <div className={styles.page29_table}>
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

export default Page29