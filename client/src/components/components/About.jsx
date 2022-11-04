import React from 'react'
import "./About.css";

function About({lang}) {
  //const { lang } = Footer()
  //console.log("BB", lang)

  if (parseInt(lang) === 1) {
    return (
      <div className="about">
        <p>Hola soy Pablo ! Y está es mi aplicacion del clima creada durante el Bootcamp de Henry! &#x1F680;</p>
        <br></br>
        <a href="https://www.linkedin.com/in/juan-pablo-azambuyo/" target="_blank" rel="noopener noreferrer">&#10145; MI PERFIL DE LINKEDIN &#11013;</a>
      </div>
    )
  } else {
    return (      
      <div className="about">
        <p>Hi i'm Pablo ! And this is my weather app created during my Bootcamp at Henry! &#x1F680;</p>
        <br></br>
        <a href="https://www.linkedin.com/in/juan-pablo-azambuyo/" target="_blank" rel="noopener noreferrer">&#10145; MY LINKEDIN PROFILE &#11013;</a>
      </div>
      
    )
  }

  /* return (
    <div>Esto es el 'About' y mostramos nuestro linkedIn con etiqueta a</div>
  ) */

  
}

export default About