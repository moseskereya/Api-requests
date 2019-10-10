import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe"
import './App.css';


const App = () =>{
    const APP_ID = "d0021928";
    const APP_KEY = "3c5a85a012ba1a0db1c2a1899694b6dc";
    const [recipe , setRecipe] = useState([]);
    const [query] = useState("chicken");


const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
}


    
useEffect(() =>{
    getRecipe();
}, []); 

    return(
        <div className="App">
            <h1>Hello react</h1>
            {recipe.map(recipe => (
                <Recipe 
                title={recipe.recipe.label}
                key={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                source={recipe.recipe.source}
                ingredientLines={recipe.recipe.ingredientLines}
                />
            ))}
        </div>
    );
}

export default App;
