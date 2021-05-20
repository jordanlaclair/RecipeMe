import React from "react";
import "../css/NoResults.css";
import search from "../images/search.png";

function NoResults({ query }) {
	console.log("here in no results component");
	return (
		<div className="noResults__wrapper">
			<div className="image__wrapper">
				<img src={search} />
			</div>

			<div className="content" id="content">
				Sorry! We didn't find those results for "{query}"
			</div>
		</div>
	);
}

export default NoResults;
