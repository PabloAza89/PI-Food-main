import React, { useEffect } from "react";
import "./Map.css";
import L from "leaflet";
import { useParams } from "react-router-dom";

function Map({onFilter}) {
    var params = useParams()
    var city = onFilter(params.ciudadId)
    
    useEffect(() => {
        var container = L.DomUtil.get("map");
    
        if (container != null) {
        container._leaflet_id = null;
        }
        //var map = L.map("map").setView([51.505, -0.09], 13);
        var map = L.map("map").setView([city.latitud, city.longitud], 5);
        L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
            attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
            "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
        }
        ).addTo(map);
        //L.Marker.prototype.options.icon = DefaultIcon;
        //L.marker([51.505, -0.09]).addTo(map);
        L.marker([city.latitud, city.longitud]).addTo(map);
        //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    },);

    
    return (
        <div className="mapAlign">
        <div id="map" ></div>     
        </div>      
      
    );
}

export default Map;
