import React, { useEffect, useState } from "react";
import "../CSS/multigenres.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { genresAPI } from "../assets/APIs&Key";
import ImageCard from "./imageCard";
import Spinner from "./spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function MultiGenres() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const genres = searchParam.get("with_genres");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${genresAPI}&with_genres=${genres}`);
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      {data.length != 0 ? (
        <div
          className="grid multiGenres"
          style={{ padding: data.length != 0 ? "0.5rem" : "0" }}
        >
          <div>
            <FontAwesomeIcon
              icon={faHome}
              size="xl"
              onClick={() => navigate("/")}
            />
          </div>
          {data.map(item => {
            return <ImageCard item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <Spinner color={{ one: "red", second: "green", three: "yellow" }} />
      )}
    </React.Fragment>
  );
}

export default MultiGenres;
