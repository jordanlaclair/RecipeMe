import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import FilteredRecipes from "./components/FilteredRecipes";
import Loading from "./components/Loading";
import NoResults from "./components/NoResults";

export const App = () => {
	//initial search is set to chicken
	const [queryResults, setQueryResults] = useState([]);
	const [query, setQuery] = useState("chicken");
	const [querySearch, setQuerySearch] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [state, setState] = useState([]);
	const [noResultsFound, setNoResultsFound] = useState(false);
	const [filters, setFilters] = useState([]);
	const [loading, setLoading] = useState(false);

	const APP_ID = "77d597d7";
	const APP_KEY = "b10c402d8931dffea0b09b47cdbcc688";
	let endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=99`;

	/* useEffect( () => {
		
		try {
			endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=99`;
			
			setLoading(true);
			await getRecipes();
			setLoading(false);
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	}, [query]); */

	useEffect(() => {
		getRecipes();
	}, [query]);

	/* useEffect(() => {
		console.log("queryResults", queryResults);
	}, [queryResults]); */

	const getRecipes = async () => {
		console.log("here in recipes function");

		//console.log(query);
		//console.log(endpoint);

		const response = await fetch(endpoint);
		const data = await response.json();
		data.hits.length === 0 ? setNoResultsFound(true) : setNoResultsFound(false);
		setQueryResults(data.hits);
		setQuerySearch(data.hits);
		setRecipes(data.hits);
		console.log("hits", data.hits);
	};

	//NOTE: ADD EACH FILTER THE USER ADDS TO HEADER
	return (
		<div className="App">
			<Header
				filters={filters}
				setFilters={setFilters}
				id="top"
				query={query}
				setQuery={setQuery}
				querySearch={querySearch}
				recipes={recipes}
				setRecipes={setRecipes}
				setState={setState}
				queryResults={queryResults}
				setNoResultsFound={setNoResultsFound}
			/>
			{loading ? (
				<Loading />
			) : noResultsFound ? (
				<NoResults query={query} noResultsFound={noResultsFound} />
			) : (
				<FilteredRecipes recipes={recipes} />
			)}
		</div>
	);
};

export default App;
