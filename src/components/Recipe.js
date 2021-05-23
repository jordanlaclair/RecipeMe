import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Recipe.css";
import PropTypes from "prop-types";
import { minutesConvert } from "../Helpers/convertMinutes";
const Recipe = (props) => {
	return (
		<div className="recipe">
			<h1 className="recipe__title">{props.title}</h1>
			{props.time !== 0 ? (
				<p className="recipe__time">Time: {minutesConvert(props.time)}</p>
			) : null}

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

Recipe.propTypes = {
	title: PropTypes.string,
	time: PropTypes.number,
	calories: PropTypes.number,
	text: PropTypes.array,
	image: PropTypes.string,
};

export default Recipe;
