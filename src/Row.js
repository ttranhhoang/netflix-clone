import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";

// npm i reat-youtube thêm trailer
// npm i movie-trailer

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snipper of code which runs based on specific condition/variable
    useEffect(()=>{
        // if [],  run once when the row loads, and dont run again
        async function fetchData(){
            const requests = await axios.get(fetchURL);
            // nó sẽ gắn vào đuôi axios https://api.themoviedb.org/3/ => discover/tv?api_key=${APIKEY}&with_networks=213
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    },[fetchURL] );

    console.table(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* serveral row__posters */}

                {movies.map(movie => (
                    <img
                        key={movie.id} 
                        onClick={() => handleClick(movie)}
                        className ={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt = {movie.name} 
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/> } 
        </div>
    )
}

export default Row
