import React from 'react'
import styles from "./page31.module.css"
const Page31 = () => {
   const countrydata = [
    {
        country: "Algeria",
        panelcount: "1714",
        male: "61%",
        female: "39%",
        _18_24: "38%",
        _25_34: "34%",
        _36_44: "17%",
        _45_54: "8%",
        _55: "3%",
        mobile: "51%"
    },
    {
        country: "Bahrain",
        panelcount: "1369",
        male: "57%",
        female: "43%",
        _18_24: "37%",
        _25_34: "33%",
        _36_44: "21%",
        _45_54: "7%",
        _55: "3%",
        mobile: "60%"
    },
    {
        country: "Egypt",
        panelcount: "46801",
        male: "72%",
        female: "28%",
        _18_24: "43%",
        _25_34: "33%",
        _36_44: "16%",
        _45_54: "6%",
        _55: "2%",
        mobile: "72%"
    },
    {
        country: "Iran",
        panelcount: "186",
        male: "88%",
        female: "13%",
        _18_24: "32%",
        _25_34: "37%",
        _36_44: "20%",
        _45_54: "8%",
        _55: "4%",
        mobile: "47%"
    },
    {
        country: "Iraq",
        panelcount: "1493",
        male: "63%",
        female: "37%",
        _18_24: "54%",
        _25_34: "32%",
        _36_44: "9%",
        _45_54: "4%",
        _55: "2%",
        mobile: "72%"
    },
    {
        country: "Israel",
        panelcount: "10657",
        male: "66%",
        female: "34%",
        _18_24: "43%",
        _25_34: "32%",
        _36_44: "14%",
        _45_54: "7%",
        _55: "4%",
        mobile: "54%"
    },
    {
        country: "Jordan",
        panelcount: "1802",
        male: "55%",
        female: "45%",
        _18_24: "50%",
        _25_34: "32%",
        _36_44: "12%",
        _45_54: "5%",
        _55: "1%",
        mobile: "63%"
    },
    {
        country: "Kenya",
        panelcount: "11425",
        male: "52%",
        female: "48%",
        _18_24: "41%",
        _25_34: "39%",
        _36_44: "14%",
        _45_54: "4%",
        _55: "1%",
        mobile: "67%"
    },
    {
        country: "Kuwait",
        panelcount: "3856",
        male: "62%",
        female: "38%",
        _18_24: "22%",
        _25_34: "47%",
        _36_44: "24%",
        _45_54: "5%",
        _55: "2%",
        mobile: "65%"
    },
    {
        country: "Lebanon",
        panelcount: "1740",
        male: "44%",
        female: "56%",
        _18_24: "47%",
        _25_34: "40%",
        _36_44: "11%",
        _45_54: "2%",
        _55: "0%",
        mobile: "73%"
    },
    {
        country: "Morocco",
        panelcount: "8159",
        male: "64%",
        female: "36%",
        _18_24: "40%",
        _25_34: "34%",
        _36_44: "16%",
        _45_54: "7%",
        _55: "3%",
        mobile: "63%"
    },
    {
        country: "Nigeria",
        panelcount: "32068",
        male: "67%",
        female: "33%",
        _18_24: "43%",
        _25_34: "37%",
        _36_44: "14%",
        _45_54: "4%",
        _55: "1%",
        mobile: "78%"
    },
    {
        country: "Oman",
        panelcount: "3110",
        male: "70%",
        female: "30%",
        _18_24: "41%",
        _25_34: "37%",
        _36_44: "16%",
        _45_54: "4%",
        _55: "2%",
        mobile: "62%"
    },
    {
        country: "Qatar",
        panelcount: "2697",
        male: "67%",
        female: "33%",
        _18_24: "32%",
        _25_34: "43%",
        _36_44: "19%",
        _45_54: "5%",
        _55: "2%",
        mobile: "50%"
    },
    {
        country: "Saudi Arabia",
        panelcount: "132403",
        male: "58%",
        female: "42%",
        _18_24: "40%",
        _25_34: "39%",
        _36_44: "16%",
        _45_54: "4%",
        _55: "2%",
        mobile: "76%"
    },
    {
        country: "South Africa",
        panelcount: "98639",
        male: "44%",
        female: "56%",
        _18_24: "38%",
        _25_34: "36%",
        _36_44: "17%",
        _45_54: "7%",
        _55: "3%",
        mobile: "65%"
    },
    {
        country: "Tunisia",
        panelcount: "178",
        male: "53%",
        female: "47%",
        _18_24: "29%",
        _25_34: "42%",
        _36_44: "19%",
        _45_54: "8%",
        _55: "1%",
        mobile: "52%"
    },
    {
        country: "United Arab Emirates",
        panelcount: "68614",
        male: "58%",
        female: "42%",
        _18_24: "26%",
        _25_34: "44%",
        _36_44: "23%",
        _45_54: "5%",
        _55: "1%",
        mobile: "63%"
    },
   ]
    return (
        <div className={styles.page31}>
            <div className={styles.page31_heading}>
                <h1>02</h1>
                <div className={styles.page31_heading_para}>
                    <p>MIDDLE EAST &</p>
                    <p>AFRICA</p>
                </div>
            </div>
            <div className={styles.page31_subheading}>
                <h1>MIDDLE EAST & AFRICA - 2.5 million</h1>
            </div>
            <div className={styles.page31_table}>
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

export default Page31