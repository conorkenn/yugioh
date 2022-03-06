import React from "react";

interface card{
    name: string,
    img: string,
    atk: string,
    def: string;
}
const YugiohCard = (props: card) =>{
    return(
        <React.Fragment>
            <h2>{props.name}</h2>
            <img
                alt={props.name}
                src={props.img}
            />
            <p>Atk: {props.atk}</p>
            <p>Def: {props.def}</p>
        </React.Fragment>
    )
}

export default YugiohCard;