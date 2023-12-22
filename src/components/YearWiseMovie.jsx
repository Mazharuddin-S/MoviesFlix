import { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import Spinner from "./spinner";

function YearWiseMovie({ year }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&page=1&vote_count.gte=100&primary_release_year=${year}`
    )
      .then(res => res.json())
      .then(result => setData(result.results));
  }, []);

  return (
    <>
      {data.length != 0 ? (
        <div
          className="yearWise"
          style={{ padding: data.length != 0 ? "0.5rem" : "0" }}
        >
          <h2>{year}</h2>
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

export default YearWiseMovie;
