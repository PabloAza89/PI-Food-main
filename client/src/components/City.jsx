import React from "react";
import { useParams } from "react-router-dom";
import "./City.css";
import noImage from "../images/noImage.jpg";

export default function Ciudad({onFilter}) {
    var params = useParams()
    var city = onFilter(params.ciudadId)

    

    if (city) {
        return (
            <div className="ciudad">
                    <img className="image" src={city.image ? city.image : noImage} alt=""></img>
                    <h2>title: {city.title}</h2> 
                    <h2>diets: {city.diets}</h2> 
                    <div>healthScore: {city.healthScore}</div>
                    {city.dishTypes ? <div>dishTypes: {city.dishTypes}</div> : <div></div>}
                    <div>summary: {city.summary} </div>
                    {city.analyzedInstructions[0] ? <div>Instructions: {city.analyzedInstructions}</div> : <div></div>}
                    
            </div>
        )
    } else {
        return (
            
            <div>
                
                <h2 style={{color: "white"}}>THERE ARE NO MATCHING RECIPES WITH THAT ID !</h2>
            </div>
        )
    }    
}