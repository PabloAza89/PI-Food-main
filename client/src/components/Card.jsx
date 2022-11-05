import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import noImage from "../images/noImage.jpg";

export default function Card({ key, id, image, title, summary, healthScore, analyzedInstructions, diets, dishTypes , onSearch }) {
    /* console.log("TITLE", title) */
    
    return (
        <div className="card">
        {console.log("CARDS SINGURAL")}
            
            <div className="card-body">
                <img  src={noImage} alt=""></img>
                <img  src={image} alt=""></img>
                {<Link to={`/recipes/${id}`}> <h3 className="card-title">{title}</h3> </Link>}
                
                
                <div className="row">
                    Diets: {diets}
                    <h5>Healt Score: {healthScore}</h5>
                    {dishTypes}
                        
                        
                    
                    
                   
                </div>
            </div>
        </div>
    );
   
}
