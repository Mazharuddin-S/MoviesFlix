import { Link } from "react-router-dom";
import { ImageAPI, api_key } from "../assets/APIs&Key";
import { searchById } from "../assets/APIs&Key";

function ImageCard({ item }) {
  return (
    <Link
      to={`/details?movieId=${item.id}`}
      key={item.id}
      className="imageCard"
    >
      <img
        src={`${ImageAPI}${item.poster_path}`}
        alt="...loading"
        loading="lazy"
      />
      <div>
        <span>{item.title}</span>
        <span>Rating - {item.vote_average}</span>
      </div>
    </Link>
  );
}

export default ImageCard;
