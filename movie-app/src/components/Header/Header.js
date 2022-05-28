import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector
 } from 'react-redux';

import logo from "./logo/logo-default.png";

const Header = () => {
  const addedMovies = useSelector(state => state.list);

  const addedMoviesArray = [...addedMovies.movies];

  return (
    <header className="header">
      <div>
      <img className="header-logo" src={logo} alt="vidmov" />
      </div>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/movielist'> Favorite list({addedMoviesArray.length}) </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
