import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Fade from "react-reveal/Fade";

import Header from "./components/Header";
import Recipes from "./components/Recipes";

export const App = () => {
	const [query, setQuery] = useState("chicken");
	const [recipes, setRecipes] = useState([]);

	const APP_ID = "77d597d7";
	const APP_KEY = "b10c402d8931dffea0b09b47cdbcc688	";

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};

	return (
		<div className="App">
			<Header query={query} setQuery={setQuery} />

			<div className="recipes">
				{recipes.map((recipe) => (
					<Fade className="fade">
						<Recipes
							title={recipe.recipe.label}
							calories={Math.round(recipe.recipe.calories)}
							image={recipe.recipe.image}
							key={uuidv4()}
							ingredients={recipe.recipe.ingredients}
						/>
					</Fade>
				))}
			</div>
		</div>
	);
};

export default App;
