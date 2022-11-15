import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Detail.css";
import noImage1 from "../images/noImage1.jpg";
import noImage2 from "../images/noImage2.jpg";
import noImage3 from "../images/noImage3.jpg";



export default function Ciudad({onFilterID}) {

    let arrImages = [noImage1, noImage2, noImage3]
    
    let randomNumber = Math.floor(Math.random() * 3) // BETWEEN 0 AND 2

    var params = useParams()
    
    var food = onFilterID(params.foodId)

    function regexInSummary(text) {
        return text.replaceAll(/(<[/]b>|<b>|<[/]a>|<a\b[^>]*>|[/]a>)/g, '');
    }
    
    if (food) {
        return (
            <div className="detail-body">
                {/* <img className="image" src={food.image ? food.image : noImage1} alt=""></img> */}
                <img className="image-detail" src={food.image ? food.image : arrImages[randomNumber]} alt=""></img>
                <p className="text-style">Title: {food.title}</p>
                <p className="text-style">Diets: {food.diets.map(function(e) {
                    if ((food.diets.indexOf(e) !== food.diets.length - 1)) {
                        return e + " + "
                    } else return e
                    })}</p>
                <p className="text-style">Health Score: {food.healthScore}</p>
                {food.dishTypes ? <>Dish Types: {food.dishTypes.map(function(e) {
                    if ((food.dishTypes.indexOf(e) !== food.dishTypes.length - 1)) {
                        return e + " + "
                    } else return e
                    })}</> : <div></div>}
                
                <p className="text-smaller-style"><b>Summary: </b>{regexInSummary(food.summary)} </p>
                {food.analyzedInstructions[0] ? <p className="text-smaller-style">Instructions: {food.analyzedInstructions}</p> : <div></div>}
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