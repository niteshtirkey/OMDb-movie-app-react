import React from "react";
import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetails.module.css";
export async function loader({ params }) {
    const imdbId = params.imdbId;
    const URL = `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${apiKey}`;
    try {
        const response = await axios.get(URL);
        return {
            movie: response.data,
            isError: false,
            error: "",
        };
    } catch (error) {
        const errorMessage =
            error?.response?.data?.Error ||
            error.message ||
            "Somthing went wronge..";
        return {
            movie: null,
            isError: true,
            error: errorMessage,
        };
    }
}
function SingleMovieDetail() {
    const { error, isError, movie: movieDetails } = useLoaderData();
    const {
        Poster,
        Title,
        Released,
        Genre,
        Runtime,
        Language,
        Awards,
        Plot,
        Actors,
        Country,
        Director,
        imdbRating,
        imdbVotes,
        BoxOffice,
        Metascore,
        Rated,
    } = movieDetails;
    console.log(movieDetails);
    if (movieDetails && movieDetails.Response === "False") {
        return <h1>{movieDetails.Error}</h1>;
    }

    if (isError) {
        return <h1>{error}</h1>;
    }
    return (
        <div className={`container ${styles.movieDetail}`}>
            <div className={styles.infoOnLeft}>
                <h2>{Title}</h2>
                <img src={Poster} alt={Title} />
                <p className={styles.infoPara}>
                    <span className={styles.key}>Realse Date</span>
                    <span className={styles.value}>{Released}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Genre</span>
                    <span className={styles.value}>{Genre}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Runtime</span>
                    <span className={styles.value}>{Runtime}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Language</span>
                    <span className={styles.value}>{Language}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Awards</span>
                    <span className={styles.value}>{Awards}</span>
                </p>
            </div>
            <div className={styles.infoOnRight}>
                <div className="plot">
                    <div className={styles.bigInfo}>
                        <h3>Plot</h3>
                        <p>{Plot}</p>
                    </div>
                    <div className={styles.bigInfo}>
                        <h3>Actors</h3>
                        <p>{Actors}</p>
                    </div>
                    <div className={styles.bigInfo}>
                        <h3>Country</h3>
                        <p>{Country}</p>
                    </div>
                    <h2>More Info</h2>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Director </span>
                        <span className={styles.value}>{Director}</span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>imdb Rating </span>
                        <span className={styles.value}>{imdbRating}</span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>imdb Votes </span>
                        <span className={styles.value}>{imdbVotes}</span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Boxoffice </span>
                        <span className={styles.value}>{BoxOffice}</span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Metascore</span>
                        <span className={styles.value}>{Metascore}</span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Rated</span>
                        <span className={styles.value}>{Rated}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovieDetail;
