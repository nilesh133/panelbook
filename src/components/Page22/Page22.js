import React from 'react'
import styles from "./page22.module.css"
const Page22 = () => {
    const countrydata = [
        {
            country: "Australia",
            panelcount: "263724",
            male: "44%",
            female: "56%",
            _18_24: "28%",
            _25_34: "26%",
            _36_44: "19%",
            _45_54: "11%",
            _55: "15%",
            mobile: "38%"
        },
        {
            country: "China",
            panelcount: "1009703",
            male: "51%",
            female: "49%",
            _18_24: "36%",
            _25_34: "33%",
            _36_44: "17%",
            _45_54: "8%",
            _55: "6%",
            mobile: "49%"
        },
        {
            country: "Hong Kong",
            panelcount: "65267",
            male: "45%",
            female: "55%",
            _18_24: "29%",
            _25_34: "33%",
            _36_44: "22%",
            _45_54: "10%",
            _55: "5%",
            mobile: "50%"
        },
        {
            country: "India",
            panelcount: "2811843",
            male: "65%",
            female: "35%",
            _18_24: "46%",
            _25_34: "29%",
            _36_44: "17%",
            _45_54: "5%",
            _55: "3%",
            mobile: "73%"
        },
        {
            country: "Indonesia",
            panelcount: "289254",
            male: "63%",
            female: "37%",
            _18_24: "45%",
            _25_34: "33%",
            _36_44: "15%",
            _45_54: "5%",
            _55: "2%",
            mobile: "75%"
        },
        {
            country: "Japan",
            panelcount: "655336",
            male: "44%",
            female: "56%",
            _18_24: "26%",
            _25_34: "22%",
            _36_44: "21%",
            _45_54: "16%",
            _55: "15%",
            mobile: "48%"
        },
        {
            country: "Japan",
            panelcount: "655336",
            male: "44%",
            female: "56%",
            _18_24: "26%",
            _25_34: "22%",
            _36_44: "21%",
            _45_54: "16%",
            _55: "15%",
            mobile: "48%"
        },
        {
            country: "Korea, Republic of",
            panelcount: "198655",
            male: "47%",
            female: "53%",
            _18_24: "40%",
            _25_34: "25%",
            _36_44: "23%",
            _45_54: "8%",
            _55: "4%",
            mobile: "51%"
        },
        {
            country: "Malaysia",
            panelcount: "144935",
            male: "50%",
            female: "50%",
            _18_24: "34%",
            _25_34: "37%",
            _36_44: "20%",
            _45_54: "7%",
            _55: "3%",
            mobile: "68%"
        },
        {
            country: "New Zealand",
            panelcount: "41255",
            male: "41%",
            female: "59%",
            _18_24: "25%",
            _25_34: "27%",
            _36_44: "18%",
            _45_54: "12%",
            _55: "18%",
            mobile: "46%"
        },
        {
            country: "Pakistan",
            panelcount: "12948",
            male: "69%",
            female: "31%",
            _18_24: "46%",
            _25_34: "33%",
            _36_44: "13%",
            _45_54: "4%",
            _55: "3%",
            mobile: "65%"
        },
        {
            country: "Philippines",
            panelcount: "246015",
            male: "39%",
            female: "61%",
            _18_24: "42%",
            _25_34: "36%",
            _36_44: "15%",
            _45_54: "5%",
            _55: "2%",
            mobile: "60%"
        },
        {
            country: "Singapore",
            panelcount: "91402",
            male: "51%",
            female: "49%",
            _18_24: "24%",
            _25_34: "32%",
            _36_44: "23%",
            _45_54: "12%",
            _55: "8%",
            mobile: "55%"
        },
        {
            country: "Taiwan",
            panelcount: "106834",
            male: "50%",
            female: "50%",
            _18_24: "31%",
            _25_34: "32%",
            _36_44: "23%",
            _45_54: "9%",
            _55: "5%",
            mobile: "73%"
        },
        {
            country: "Thailand",
            panelcount: "165310",
            male: "52%",
            female: "48%",
            _18_24: "39%",
            _25_34: "33%",
            _36_44: "18%",
            _45_54: "6%",
            _55: "3%",
            mobile: "74%"
        },
        {
            country: "Vietnam",
            panelcount: "234038",
            male: "61%",
            female: "39%",
            _18_24: "44%",
            _25_34: "34%",
            _36_44: "17%",
            _45_54: "4%",
            _55: "2%",
            mobile: "72%"
        },


    ]
    return (
        <div className={styles.page22}>
            <div className={styles.page22_heading}>
                <h1>02</h1>
                <div className={styles.page22_heading_para}>
                    <p>ASIA</p>
                    <p>PACIFIC</p>
                </div>
            </div>
            <div className={styles.page22_subheading}>
                <h1>ASIA PACIFIC - 2.5 million</h1>
            </div>
            <div className={styles.page22_table}>
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

export default Page22