import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import noImage1 from "../images/noImage1.jpg";
import noImage2 from "../images/noImage2.jpg";
import noImage3 from "../images/noImage3.jpg";



export default function Ciudad({onFilterID}) {

    let arrImages = [noImage1, noImage2, noImage3]
    //let randomNumber = Math.floor(Math.random() * (3 - 0 + 0) + 0)
    let randomNumber = Math.floor(Math.random() * 3)

    var params = useParams()
    
    var food = onFilterID(params.foodId)

    function regexInSummary(text) {
        return text.replaceAll(/(<[/]b>|<b>|<[/]a>|<a\b[^>]*>|[/]a>)/g, '');
    }
    
    if (food) {
        return (
            <div className="ciudad">
                {/* <img className="image" src={food.image ? food.image : noImage1} alt=""></img> */}
                <img className="image" src={food.image ? food.image : arrImages[randomNumber]} alt=""></img>
                <text>title: {food.title}</text>
                <text>diets: {food.diets}</text>
                <text>healthScore: {food.healthScore}</text>
                {food.dishTypes ? <text>dishTypes: {food.dishTypes}</text> : <div></div>}
                <text>summary: {regexInSummary(food.summary)} </text>
                {food.analyzedInstructions[0] ? <text>Instructions: {food.analyzedInstructions}</text> : <div></div>}
            </div>
        )
    } else if (params.foodId === "create") {
        return (<div></div>)
    } else {
        return (
            <div>
                <h2 style={{color: "white", textAlign: "center"}}>THERE ARE NO MATCHING RECIPES WITH THAT ID !</h2>
            </div>
        )
    }    
}