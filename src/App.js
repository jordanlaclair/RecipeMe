import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import FilteredRecipes from "./components/FilteredRecipes";

export const App = () => {
	//initial search is set to chicken
	const [queryResults, setQueryResults] = useState([]);
	const [query, setQuery] = useState("chicken");
	const [querySearch, setQuerySearch] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [state, setState] = useState([]);
	const APP_ID = "77d597d7";
	const APP_KEY = "b10c402d8931dffea0b09b47cdbcc688";
	let endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`;

	useEffect(() => {
		endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`;
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		console.log("here in recipes function");

		//console.log(query);
		//console.log(endpoint);
		const response = await fetch(endpoint);
		const data = await response.json();
		setQueryResults(data.hits);
		setQuerySearch(data.hits);
		setRecipes(data.hits);
		console.log("hits", data.hits);
	};

	return (
		<div className="App">
			<Header
				id="top"
				query={query}
				setQuery={setQuery}
				recipes={recipes}
				setRecipes={setRecipes}
				setState={setState}
				queryResults={queryResults}
			/>

			<FilteredRecipes recipes={recipes} />
		</div>
	);
};

export default App;
