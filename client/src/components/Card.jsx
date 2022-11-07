import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import noImage from "../images/noImage.jpg";

export default function Card({  id, image, title, summary, healthScore, analyzedInstructions, diets, dishTypes }) {
    /* console.log("TITLE", title) */

    return (
        <div className="card">
        {/* {console.log("CARDS SINGURAL")} */}
            <div className="card-body">
                <img  src={image ? image : noImage} alt=""></img>
                {<Link to={`${id}`}> <h2 className="card-title">{title}</h2> </Link>}
                <div className="row">
                <h3>Diets: {diets}</h3>
                <h3>Healt Score: {healthScore}</h3>
                <h3>{dishTypes}</h3>
                </div>
            </div>
        </div>
    );
   
}
