import { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import Spinner from "./spinner";
import { HomePageAPI } from "../assets/APIs&Key";

function YearWiseMovie({ year }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${HomePageAPI}&primary_release_year=${year}`)
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
