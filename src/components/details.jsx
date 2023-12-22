import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchById, api_key, youtubeLink } from "../assets/APIs&Key";
import "../CSS/details.css";
import Spinner from "./spinner";
import { rating } from "./ratingFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar } from "@fortawesome/free-solid-svg-icons";

function Details() {
  const [data, setData] = useState({});
  const [videoKey, setVideokey] = useState("");
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const movieId = searchParam.get("movieId");

  useEffect(() => {
    fetch(
      `${searchById}${movieId}?api_key=${api_key}&append_to_response=videos`
    )
      .then(res => res.json())
      .then(result => {
        setData(() => result);
        setVideokey(() => result.videos.results[0].key);
      })
      .catch(err => console.log("error fetching data"));
  }, []);

  return (
    <div className="details">
      <div>
        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHome} size="xl" />
        </button>
      </div>
      <div className="youtubeTrailer">
        <iframe src={`${youtubeLink}${videoKey}`} allowFullScreen></iframe>
      </div>

      <div className="description">
        <span>{data.original_title}</span>

        <span>
          Ratings - {data.vote_average} / 10 {"  "}
          <FontAwesomeIcon icon={faStar} color="gold" />
        </span>

        <p>{data.overview}</p>
      </div>
    </div>
  );
}
export default Details;
