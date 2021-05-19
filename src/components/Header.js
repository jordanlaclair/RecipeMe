import React, { useState, useEffect } from "react";
import "../css/Header.css";

function Header({ setQuery, recipes, setRecipes, setState }) {
	/* useEffect(() => {
		console.log("update state");
	}, [recipes]); */

	const [search, setSearch] = useState("");

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();

		setQuery(search);

		setSearch("");
	};

	const sortByIncreasingCalories = () => {
		setState(["1"]);
		let sorted = recipes.sort(function (a, b) {
			return a.recipe.calories - b.recipe.calories;
		});
		setRecipes(sorted);
		console.log(sorted);
	};

	const sortByDecreasingCalories = () => {
		setState(["2"]);
		let sorted = recipes.sort(function (a, b) {
			return b.recipe.calories - a.recipe.calories;
		});

		setRecipes(sorted);
		console.log(sorted);
	};

	const filterCuisine = () => {
		console.log(recipes);
		let filtered = recipes.filter(
			(recipe) => recipe.recipe.cuisineType.length == 1
		);
		setRecipes(filtered);
		console.log(filtered);
	};

	return (
		<div className="header_wrapper">
			<header
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="header"
			>
				RecipeMe
			</header>
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
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenu"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Filter
					</button>
					<ul
						className="dropdown-menu multi-level"
						role="menu"
						aria-labelledby="dropdownMenu"
					>
						<li className="dropdown-submenu">
							<a className="dropdown-item" tabindex="-1">
								Calories
							</a>
							<ul className="dropdown-menu">
								<li
									onClick={sortByIncreasingCalories}
									className="dropdown-item"
								>
									<a className="dropdown-item" tabindex="-1">
										Lowest Calories
									</a>
								</li>
								<li
									onClick={sortByDecreasingCalories}
									className="dropdown-item"
								>
									<a className="dropdown-item" tabindex="-1">
										Highest Calories
									</a>
								</li>
							</ul>
						</li>
						<li className="dropdown-divider"></li>

						<li className="dropdown-submenu">
							<a className="dropdown-item" tabindex="-1">
								Meal Type
							</a>
							<ul className="dropdown-menu">
								<li className="dropdown-item">
									<a className="dropdown-item" tabindex="-1">
										Second level
									</a>
								</li>
							</ul>
						</li>
						<li className="dropdown-divider"></li>

						<li className="dropdown-submenu">
							<a className="dropdown-item" tabindex="-1">
								Cuisine Type
							</a>
							<ul className="dropdown-menu">
								<li onClick={filterCuisine} className="dropdown-item">
									<a className="dropdown-item" tabindex="-1">
										Chinese
									</a>
								</li>
							</ul>
						</li>
						<li className="dropdown-divider"></li>

						<li className="dropdown-submenu">
							<a className="dropdown-item" tabindex="-1">
								Diet
							</a>
							<ul className="dropdown-menu">
								<li className="dropdown-item">
									<a className="dropdown-item" tabindex="-1">
										Second level
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
