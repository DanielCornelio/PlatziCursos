import React from 'react'

const HolaMundo = () => {
    const hello = "Hola Mundo!"
    const isTrue = false
    return(
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso Escencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="react"/>
            {isTrue?<h4>Esto es verdadero</h4>:<h5>Soy Falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    )
}
export default HolaMundo