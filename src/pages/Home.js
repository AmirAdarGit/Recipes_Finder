import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Resepie from "../components/Resepie";
import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [resepies, setResepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "dfe26673";
  const APP_KEY = "ccee68ad3cfae88a98b0bf7c5d14a65b";

  const api = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  useEffect(() => {
    console.log(api);
    getRecapie();
  }, [query]);

  const getRecapie = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data.hits);
    setResepies(data.hits);
  };

  const barData = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const searchData = (e) => {
    e.preventDefault();
    console.log(search);
    setQuery(search);
  };
  return (
    <div className="Home">
      <div className="title-and-search-bar">
        <div className="home-about-btn">
          <Button component={Link} to="/about">
            About
          </Button>
        </div>
        <form className="search-form" onSubmit={searchData}>
          <input
            className="search-input"
            type="text"
            placeholder="Search Recapies"
            onChange={barData}
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="resepies-container">
        {resepies.map((obj) => (
          <Resepie
            recepie={obj.recipe.label}
            calories={obj.recipe.calories}
            img={obj.recipe.image}
            ingredientLines={obj.recipe.ingredientLines}
            key={obj.recipe.label}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
