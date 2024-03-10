import { useEffect, useState } from "react";
import { ImageAPI } from "../assets/APIs&Key";
import { Link } from "react-router-dom";
import { api_key, searchById } from "../assets/APIs&Key";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCross, faX } from "@fortawesome/free-solid-svg-icons";

function FavoriteCard({ movieId, list }) {
  const [details, setDetails] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const removeMovie = event => {
    event.stopPropagation();
    dispatch({ type: "REMOVE_FROM_LIST", payload: movieId, list: list });
  };

  function anchorClickhandler(event) {
    event.preventDefault();
  }

  useEffect(() => {
    fetch(
      `${searchById}${movieId}?api_key=${api_key}&append_to_response=credits,videos`
    )
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(err => setError(err.info));
  }, []);

  return (
    <div key={details.id} className="favoriteCard">
      <button onClick={event => removeMovie(event)}>
        <FontAwesomeIcon icon={faX} />
      </button>
      <img
        src={`${ImageAPI}${details.poster_path}`}
        alt="...loading"
        loading="lazy"
        style={{ filter: "blur(0.1rem)" }}
        onLoad={event => {
          event.target.style.filter = "blur(0px)";
        }}
      />
      <Link to={`/details?movieId=${movieId}`}>
        <span>{details.title}</span>
        <span>Rating - {details.vote_average}</span>
      </Link>
    </div>
  );
}

export default FavoriteCard;
