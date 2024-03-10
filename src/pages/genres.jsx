import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageAPI, genresAPI } from "../assets/APIs&Key";
import Spinner from "../components/spinner";
import ImageCard from "../components/imageCard";

import "../CSS/genres.css";

function Genres() {
  const [data, setData] = useState([]);
  const [searchParam] = useSearchParams();
  const genresId = searchParam.get("with_genres");
  console.log("generes loaded");

  useEffect(() => {
    fetch(`${genresAPI}&with_genres=${genresId}`)
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => console.log(err.info));
  }, [searchParam]);

  return (
    <>
      {data.length != 0 ? (
        <div
          className="genres"
          style={{ padding: data.length != 0 ? "0.5rem" : "0" }}
        >
          {data.map(item => {
            return <ImageCard item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <Spinner color={{ one: "skyblue", two: "green", three: "gray" }} />
      )}
    </>
  );
}

export default Genres;
