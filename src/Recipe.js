import React from 'react'

const Recipe = ({title,calories,image,source, ingredientLines}) => {
    return (
        <div className="Data">
            <h3>{title}</h3>
            <img src={image} alt=""/>
            <p>{calories}</p>
            <p>{source}</p>
            <hr/>
            <p>{ingredientLines}</p>
        </div>
    );
}

export default Recipe
