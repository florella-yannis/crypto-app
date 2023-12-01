import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
    // console.log(coinId);

    const [like, setLike] = useState(false);

    useEffect(() => {
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",");
            if (favList.includes(coinId)) {
                setLike(true);
            } else {
                setLike(false);
            }
        }
    }, [coinId]);

    const idChecker = (id) => {
        let favList = null;

        // si coinList existe
        if (window.localStorage.coinList) {
            favList = window.localStorage.coinList.split(",");
        }

        // si favlist est true (boite existante)
        if(favList) {
            // et que le token n'est pas dans les favoris
            if (favList.includes(id)){
                window.localStorage.coinList = favList.filter((coin) => coin !== id);
                setLike(false);
            } else {
                window.localStorage.coinList = [...favList, coinId];
                setLike(true);
            }
        } else {
            // ajout d'un coin si coin list est vide
            window.localStorage.coinList = coinId;
            setLike(true);
        }
    }

    return (
        <img
            onClick={() => idChecker(coinId)}
            src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
            alt="icon-star"
        />
    );
};

export default StarIcon;
