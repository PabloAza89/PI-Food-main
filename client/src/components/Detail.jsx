import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import noImage from "../images/noImage.jpg";

export default function Ciudad({onFilterID}) {
    var params = useParams()
    var food = onFilterID(params.foodId)

    function regexInSummary(text) {
        return text.replaceAll(/(<[/]b>|<b>|<[/]a>|<a\b[^>]*>|[/]a>)/g, '');
    }

    if (food) {
        return (
            <div className="ciudad">
                    <img className="image" src={food.image ? food.image : noImage} alt=""></img>
                    <text>title: {food.title}</text>
                    <text>diets: {food.diets}</text>
                    <text>healthScore: {food.healthScore}</text>
                    {food.dishTypes ? <text>dishTypes: {food.dishTypes}</text> : <div></div>}
                    <text>summary: {regexInSummary(food.summary)} </text>
                    {food.analyzedInstructions[0] ? <text>Instructions: {food.analyzedInstructions}</text> : <div></div>}
                    
            </div>
        )
    } else {
        return (
            
            <div>
                
                <h2 style={{color: "white", textAlign: "center"}}>THERE ARE NO MATCHING RECIPES WITH THAT ID !</h2>
            </div>
        )
    }    
}