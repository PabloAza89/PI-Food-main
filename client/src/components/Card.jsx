import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import noImage from "../images/noImage.jpg";

export default function Card({  id, image, title, summary, healthScore, analyzedInstructions, diets, dishTypes }) {
    /* console.log("TITLE", title) */

    return (
        <div className="card">
        {console.log("CARDS SINGURAL")}
            <div className="card-body">
                <img  src={image ? image : noImage} alt=""></img>
                {<Link to={`${id}`}> <h3 className="card-title">{title}</h3> </Link>}
                <div className="row">
                Diets: {diets}
                <h5>Healt Score: {healthScore}</h5>
                {dishTypes}
                </div>
            </div>
        </div>
    );
   
}
