import {Layout} from '../../components/Layout/Layout.js';
import { useEffect, useState } from "react";

function Home (){

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const url = "https://api.spoonacular.com/recipes/random?apiKey=90a53ecb09934cd7aebbc94d0959eef8&number=100";
        fetchData(url);
        async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.recipes;
        setRecipes(results);
    }
  }, []);

    return (
        <>
        <Layout>
            <ul>
                {recipes.map((recipe) => (
                    <p key={recipe.id}>{recipe.title}</p>
                ))
                }
            </ul>
        </Layout>
        </>
    )
}

export {Home}