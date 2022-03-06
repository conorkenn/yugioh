import React from "react";

import styles from "./YugiohCard.module.css";

interface card{
    name: string,
    img: string,
    atk: string,
    def: string;
}
const YugiohCard = (props: card) =>{
    return(
        <a className={styles.cardLink}>
            <div className={styles.container}>
                <h2 className={styles.cardHeader}>{props.name}</h2>
                <div className={styles.cardImageWrapper}>
                    <img
                        className={styles.cardImage}
                        alt={props.name}
                        src={props.img}
                        width={360}
                        height={450}
                    />
                </div>
                <p>Atk: {props.atk}</p>
                <p>Def: {props.def}</p>
            </div>
        </a>
    )
}

export default YugiohCard;