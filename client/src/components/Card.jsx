import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ key, id, title, summary, healthScore, analyzedInstructions, diets }) {
    console.log("TITLE", title)
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/recipes/${id}`}> <h3 className="card-title">{title}</h3> </Link>
                <p className="card-country">{summary}</p>
                <div className="row">
                    <div id="minAlign" /* className="col-sm-4 col-md-4 col-lg-4" */>
                        <h5>Min</h5>
                        <h5>{healthScore}</h5>
                    </div>
                    <div id="minAlign" /* className="col-sm-4 col-md-4 col-lg-4" */>
                        <h5>Max</h5>
                        <h5>{analyzedInstructions} </h5>
                    </div>
                   
                </div>
            </div>
        </div>
    );
   
}
