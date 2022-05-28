import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList } from '../../redux/actions/listActions';
import './Favorites.css';
import { useState } from 'react';

const Favorites = () => {

    const movies = useSelector(state => state.list);

    const [listName, setListName] = useState('');


    const movieArray = [...movies.movies];

    const dispatch = useDispatch();

    const onRemove = (movie) => {
        dispatch(removeFromList(movie));
    }


    const onCreateListButton = () => {

        console.log(listName);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onInputOnChange = (e) => {
        e.preventDefault();
        setListName(e.target.value);
    }


    return (
        <div className='fav-list'>

            <div className='list'>
                <div className='list-name'>
                    <h2>Create a movie list</h2>
                </div>
                <div className="list-name-box">
                    <form onSubmit={onSubmit}>
                        <input onChange={onInputOnChange} type='text' placeholder='Type name of list' className='fav-inp' />
                    </form>
                </div>
            </div>


                <div className='movie-list'>
                    {movieArray === undefined ? <p>No movie available</p> : movieArray.map((movie) => {
                        return (
                            <div key={movie.movie.imdbID}>
                                <div className='movie-card'>
                                    <div className="card-image">
                                        <img src={movie.movie.Poster} alt={movie.movie.Title} />
                                    </div>
                                    <div className="card-text">
                                        <div className="card-title">
                                            <h3>{movie.movie.Title}</h3>
                                            <p>Movie ID: {movie.movie.imdbID}</p>
                                            <p>Year: {movie.movie.Year}</p>
                                            </div>
                                        <button onClick={() => onRemove(movie.movie)} className='remove-button remove-submit'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>

                <div className="create-list-button">
                    <button onClick={() => onCreateListButton()} className='button search-submit margin-top'>Create list</button>
                </div>

        </div>
    );
}

export default Favorites;