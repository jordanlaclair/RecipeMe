import React from "react";
import { v4 as uuidv4 } from "uuid";

import "../css/recipes.css";
const Recipes = (props) => {
	return (
		<div className="recipe">
			<h1 className="recipe__title">{props.title}</h1>
			<p className="recipe__calories">Calories: {props.calories}</p>

			<ul className="recipe__list">
				{props.ingredients.map((ingredient) => (
					<li key={uuidv4()}>{ingredient.text}</li>
				))}
			</ul>
			<img className="image" src={props.image} alt="" />
		</div>
	);
};

export default Recipes;
