import React from "react";
import Recipe from "./Recipe";
import "../css/FilteredRecipes.css";
import { v4 as uuidv4 } from "uuid";

function FilteredRecipes({ recipes }) {
	return (
		<div className="recipes">
			{recipes.map((recipe) => (
				<Recipe
					title={recipe.recipe.label}
					calories={Math.round(recipe.recipe.calories)}
					image={recipe.recipe.image}
					key={uuidv4()}
					ingredients={recipe.recipe.ingredients}
					time={recipe.recipe.totalTime}
				/>
			))}
		</div>
	);
}

export default FilteredRecipes;
