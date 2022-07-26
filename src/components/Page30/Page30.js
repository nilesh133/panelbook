import React from 'react'
import styles from "./page30.module.css"
const Page30 = () => {
    const countrydata = [
        {
            country: "Austria",
            panelcount: "35941",
            male: "52%",
            female: "48%",
            _18_24: "35%",
            _25_34: "28%",
            _36_44: "18%",
            _45_54: "10%",
            _55: "9%",
            mobile: "55%"
        },
        {
            country: "Belgium",
            panelcount: "48722",
            male: "50%",
            female: "50%",
            _18_24: "33%",
            _25_34: "22%",
            _36_44: "16%",
            _45_54: "12%",
            _55: "16%",
            mobile: "39%"
        },
        {
            country: "Bulgaria",
            panelcount: "7475",
            male: "41%",
            female: "59%",
            _18_24: "22%",
            _25_34: "29%",
            _36_44: "24%",
            _45_54: "17%",
            _55: "8%",
            mobile: "52%"
        },
        {
            country: "Croatia",
            panelcount: "9119",
            male: "47%",
            female: "53%",
            _18_24: "25%",
            _25_34: "31%",
            _36_44: "23%",
            _45_54: "14%",
            _55: "7%",
            mobile: "50%"
        },
        {
            country: "Czech Republic",
            panelcount: "47038",
            male: "53%",
            female: "47%",
            _18_24: "35%",
            _25_34: "29%",
            _36_44: "17%",
            _45_54: "11%",
            _55: "9%",
            mobile: "40%"
        },
        {
            country: "Denmark",
            panelcount: "24072",
            male: "56%",
            female: "44%",
            _18_24: "33%",
            _25_34: "23%",
            _36_44: "16%",
            _45_54: "12%",
            _55: "16%",
            mobile: "50%"
        },
        {
            country: "Finland",
            panelcount: "16597",
            male: "48%",
            female: "52%",
            _18_24: "26%",
            _25_34: "26%",
            _36_44: "19%",
            _45_54: "13%",
            _55: "16%",
            mobile: "54%"
        },
        {
            country: "France",
            panelcount: "534889",
            male: "46%",
            female: "54%",
            _18_24: "36%",
            _25_34: "24%",
            _36_44: "18%",
            _45_54: "12%",
            _55: "11%",
            mobile: "38%"
        },
        {
            country: "Germany",
            panelcount: "537493",
            male: "52%",
            female: "48%",
            _18_24: "34%",
            _25_34: "26%",
            _36_44: "17%",
            _45_54: "10%",
            _55: "11%",
            mobile: "39%"
        },
        {
            country: "Greece",
            panelcount: "24513",
            male: "51%",
            female: "49%",
            _18_24: "29%",
            _25_34: "27%",
            _36_44: "23%",
            _45_54: "15%",
            _55: "6%",
            mobile: "47%"
        },
        {
            country: "Hungary",
            panelcount: "16463",
            male: "45%",
            female: "55%",
            _18_24: "29%",
            _25_34: "26%",
            _36_44: "18%",
            _45_54: "14%",
            _55: "13%",
            mobile: "48%"
        },
        {
            country: "Ireland",
            panelcount: "44870",
            male: "52%",
            female: "48%",
            _18_24: "37%",
            _25_34: "27%",
            _36_44: "19%",
            _45_54: "11%",
            _55: "7",
            mobile: "60%"
        },
        {
            country: "Italy",
            panelcount: "217550",
            male: "47%",
            female: "53%",
            _18_24: "28%",
            _25_34: "25%",
            _36_44: "21%",
            _45_54: "15%",
            _55: "11%",
            mobile: "54%"
        },
        {
            country: "Latvia",
            panelcount: "2886",
            male: "44%",
            female: "56%",
            _18_24: "36%",
            _25_34: "31%",
            _36_44: "20%",
            _45_54: "5%",
            _55: "7%",
            mobile: "59%"
        },
        {
            country: "Lithuania",
            panelcount: "5054",
            male: "53%",
            female: "47%",
            _18_24: "50%",
            _25_34: "30%",
            _36_44: "12%",
            _45_54: "6%",
            _55: "3%",
            mobile: "64%"
        },
        {
            country: "Netherlands",
            panelcount: "149054",
            male: "55%",
            female: "45%",
            _18_24: "40%",
            _25_34: "25%",
            _36_44: "14%",
            _45_54: "9%",
            _55: "12%",
            mobile: "44%"
        },
        {
            country: "Norway",
            panelcount: "21117",
            male: "51%",
            female: "49%",
            _18_24: "36%",
            _25_34: "26%",
            _36_44: "16%",
            _45_54: "11%",
            _55: "10%",
            mobile: "55%"
        },
        {
            country: "Poland",
            panelcount: "92297",
            male: "49%",
            female: "51%",
            _18_24: "40%",
            _25_34: "31%",
            _36_44: "16%",
            _45_54: "7%",
            _55: "6%",
            mobile: "41%"
        },
        {
            country: "Portugal",
            panelcount: "25987",
            male: "42%",
            female: "58%",
            _18_24: "26%",
            _25_34: "29%",
            _36_44: "24%",
            _45_54: "14%",
            _55: "7%",
            mobile: "43%"
        },
        {
            country: "Romania",
            panelcount: "55427",
            male: "46%",
            female: "54%",
            _18_24: "29%",
            _25_34: "31%",
            _36_44: "21%",
            _45_54: "12%",
            _55: "7%",
            mobile: "58%"
        },
        {
            country: "Russian Federation",
            panelcount: "324857",
            male: "55%",
            female: "45%",
            _18_24: "42%",
            _25_34: "27%",
            _36_44: "19%",
            _45_54: "7%",
            _55: "5%",
            mobile: "48%"
        },
        {
            country: "Slovakia",
            panelcount: "6549",
            male: "38%",
            female: "62%",
            _18_24: "36%",
            _25_34: "28%",
            _36_44: "19%",
            _45_54: "10%",
            _55: "7%",
            mobile: "67%"
        },
        {
            country: "Spain",
            panelcount: "280361",
            male: "50%",
            female: "50%",
            _18_24: "33%",
            _25_34: "26%",
            _36_44: "21%",
            _45_54: "12%",
            _55: "7%",
            mobile: "50%"
        },
        {
            country: "Sweden",
            panelcount: "64155",
            male: "48%",
            female: "52%",
            _18_24: "28%",
            _25_34: "27%",
            _36_44: "17%",
            _45_54: "13%",
            _55: "16%",
            mobile: "56%"
        },
        {
            country: "Switzerland",
            panelcount: "28950",
            male: "50%",
            female: "50%",
            _18_24: "29%",
            _25_34: "27%",
            _36_44: "20%",
            _45_54: "13%",
            _55: "11%",
            mobile: "50%"
        },
        {
            country: "Turkey",
            panelcount: "138941",
            male: "68%",
            female: "32%",
            _18_24: "47%",
            _25_34: "27%",
            _36_44: "18%",
            _45_54: "5%",
            _55: "3%",
            mobile: "68%"
        },
        {
            country: "Ukraine",
            panelcount: "47628",
            male: "41%",
            female: "59%",
            _18_24: "32%",
            _25_34: "34%",
            _36_44: "20%",
            _45_54: "9%",
            _55: "5%",
            mobile: "59%"
        },
        {
            country: "United Kingdom",
            panelcount: "767965",
            male: "43%",
            female: "57%",
            _18_24: "32%",
            _25_34: "26%",
            _36_44: "18%",
            _45_54: "11%",
            _55: "13%",
            mobile: "48%"
        },

    ]
    return (
        <div className={styles.page30}>
            <div className={styles.page30_heading}>
                <h1>02</h1>
                <div className={styles.page30_heading_para}>
                    <p>EUROPE</p>
                </div>
            </div>
            <div className={styles.page30_subheading}>
                <h1>EUROPE - 2.5 million</h1>
            </div>
            <div className={styles.page30_table}>
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

export default Page30