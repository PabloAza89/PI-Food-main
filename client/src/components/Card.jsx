import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import noImage1 from "../images/noImage1.jpg";
import noImage2 from "../images/noImage2.jpg";
import noImage3 from "../images/noImage3.jpg";


export default function Card({  id, image, title, summary, healthScore, analyzedInstructions, diets, dishTypes }) {
    /* console.log("TITLE", title) */
    let arrImages = [noImage1, noImage2, noImage3]
    // Math.floor(Math.random() * (max - min + 1)) + min;
    //let randomNumber = Math.floor(Math.random() * (3 - 0 + 0) + 0)
    let randomNumber = Math.floor(Math.random() * 3) // BETWEEN 0 AND 2

    return (
        <div className="card">
        {/* {console.log("CARDS SINGURAL")} */}
            <div className="card-body">
                {/* <img  src={image ? image : noImage1} alt=""></img> */}
                <img  src={image ? image : arrImages[randomNumber] } alt=""></img>
                <Link to={`${id}`}> <h2 className="card-title">{title}</h2> </Link>
                <div className="row">
                <h3>Diets: {diets}</h3>
                <h3>Healt Score: {healthScore}</h3>
                <h3>{dishTypes}</h3>
                </div>
            </div>
        </div>
    );
   
}
