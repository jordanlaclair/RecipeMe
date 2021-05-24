import React from "react";
import "../css/Results.css";
function Results({ recipes, query }) {
	return (
		<div className="results__wrapper">
			<div class="results__content">
				Results found for "{query}": {recipes.length}
			</div>
		</div>
	);
}

export default Results;
