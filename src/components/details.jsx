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
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const movieId = searchParam.get("movieId");

  useEffect(() => {
    fetch(
      `${searchById}${movieId}?api_key=${api_key}&append_to_response=credits,videos`
    )
      .then(res => res.json())
      .then(result => {
        setData(() => result);
        if (result.videos.results.length != 0) {
          setVideokey(() => {
            return result.videos.results[0].key;
          });
        }
        setCast(() => result.credits.cast);
        setCrew(() => result.credits.crew);
      })
      .catch(err => console.log("error fetching data"));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {Object.keys(data).length != 0 ? (
        <div className="details">
          <div>
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faHome} size="xl" />
            </button>
          </div>
          <div className="youtubeTrailer">
            {videoKey && (
              <iframe
                src={`${youtubeLink}${videoKey}`}
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="description">
            <div>
              <span>Title</span> - {data.original_title}
            </div>
            <div>
              <span>Genre</span> -
              {data.genres.map(item => (
                <span key={item.id}>{item.name} , </span>
              ))}
            </div>
            <div>
              <span>Cast - </span>
              {cast.map((item, index) => {
                return (
                  index <= 8 && (
                    <span key={item.credit_id}>
                      {item.name} {"  , "}
                    </span>
                  )
                );
              })}
            </div>
            <div>
              <span> Director - </span>
              {crew.map(item => {
                return (
                  item.job.toLowerCase() == "director" && (
                    <span key={item.credit_id}>{item.name}</span>
                  )
                );
              })}
            </div>
            <div>
              <span>Ratings - </span> {data.vote_average} / 10 {"  "}
              <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
            <div>
              <span>Overview - </span> <br /> {data.overview}
            </div>
          </div>
        </div>
      ) : (
        <Spinner color={{ one: "skyblue" }} />
      )}
    </>
  );
}
export default Details;
