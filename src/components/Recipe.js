import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Recipe.css";
import PropTypes from "prop-types";

const Recipe = (props) => {
	function minutesConvert(n) {
		var num = n;
		var hours = num / 60;
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		if (rhours > 1 && rminutes > 1) {
			return rhours + " hours and " + rminutes + " minutes";
		} else if (rhours > 1 && rminutes == 1) {
			return rhours + " hours and " + rminutes + " minute";
		} else if (rhours < 1 && rminutes > 1) {
			return rminutes + " minutes";
		} else if (rhours < 1 && rminutes == 1) {
			return rminutes + " minute";
		} else if (rhours == 1 && rminutes > 1) {
			return rhours + " hour and " + rminutes + " minutes";
		} else if (rhours == 1 && rminutes == 1) {
			return rhours + " hour and " + rminutes + " minute";
		} else if (rhours == 1 && rminutes == 0) {
			return rhours + " hour";
		} else if (rhours > 1 && rminutes == 0) {
			return rhours + " hours";
		}
	}

	return (
		<div className="recipe">
			<h1 className="recipe__title">{props.title}</h1>
			{props.time != 0 ? (
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
