import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import noImage1 from "../images/noImage1.jpg";
import noImage2 from "../images/noImage2.jpg";
import noImage3 from "../images/noImage3.jpg";


export default function Card({  id, image, title, summary, healthScore, analyzedInstructions, diets, dishTypes }) {

    let arrImages = [noImage1, noImage2, noImage3]

    let randomNumber = Math.floor(Math.random() * 3) // BETWEEN 0 AND 2

    return (
        <div className="card">
            {/* <img  src={image ? image : noImage1} alt=""></img> */}
            <img className="image" src={image ? image : arrImages[randomNumber] } alt=""></img>
            <Link to={`${id}`}> <p className="card-text">{title}</p> </Link>
            <div className="card-text">
                {/* <p className="card-text">Diets: {diets.map(e => e + " + ")}</p> */}
                <p className="card-text">Diet: {diets.map(function(e) {
                    if ((diets.indexOf(e) !== diets.length - 1)) {
                        return e + " + "
                    } else return e
                    })}
                </p>
                <p className="card-text">Healt Score: {healthScore}</p>
                {dishTypes?<p className="card-text">{dishTypes}</p>:<div></div>}
            </div>
        </div>
    );
   
}
