import React, { useEffect, useState } from "react";
import { data } from '../db.js';


const CoinChart = ({ coinId, coinName }) => {
    const [duration, setDuration] = useState(30);
    // const [coinData, setCoinData] = useState();

    const headerData = [
        [1, "1 jour"],
        [3, "3 jours"],
        [7, "7 jours"],
        [30, "1 mois"],
        [91, "3 mois"],
        [181, "6 mois"],
        [365, "1 an"],
        [3000, "Max"],
    ];

    useEffect(() => {
        let dataArray = data;
        
        for(let i = 0; i < dataArray.length; i++) {
            let price = dataArray.prices[i][1];
        }
        console.log(dataArray);
    }, []);

    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el) => {
                    return (
                        <div
                            htmlFor={"btn" + el[0]}
                            onClick={() => setDuration(el[0])}
                            key={el[0]}
                            className={el[0] === duration ? "active-btn" : ""}
                        >
                            {el[1]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CoinChart;
