import React, { useState } from "react";
import "../css/Header.css";

function Header({ query, setQuery }) {
	const [search, setSearch] = useState("");
	//initial search is set to chicken

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="header_wrapper">
			<header className="header">RecipeMe &copy;</header>
			<div class="form__wrapper">
				<form onSubmit={submitSearch} className="search-form">
					<input
						type="text"
						className="search-bar"
						value={search}
						onChange={updateSearch}
						placeholder="Search for a recipe!"
					/>
					<button className="search-button" type="submit">
						Search
					</button>
				</form>
			</div>
			<div className="menu">
				<a href="#">About</a>
				<a href="#">About</a>
				<a href="#">About</a>
			</div>
		</div>
	);
}

export default Header;
