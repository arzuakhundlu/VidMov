import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import './Search.css';

const Search = () => {

    const [movieData, setMovieData] = useState([]);
    const [input, setInput] = useState('');

    const changeClick = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }
    const submitClick = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=98888a79&s=${input}`);
            const data = await response.json();
            setMovieData(data.Search);
        }
        getData();
    });
    
    
    return (
        <div className='search'>
            <div className='search-box'>
                <form onSubmit={submitClick}>
                    <input onChange={changeClick} type='text' placeholder='Search...' className='search-inp' />
                </form>

                <div className='movie-list'>
                    {movieData === undefined ? <p>Search  movies</p>: movieData.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <Movies
                                    movie={movie}
                                />
                            </div>
                        );
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default Search;