import { useEffect, useRef, useState } from "react";
import "../CSS/search.css";

import ImageCard from "../components/imageCard";
import { useNavigate } from "react-router";
import { searchAPI } from "../assets/APIs&Key";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBackward,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [data, setData] = useState([]);
  const searchBar = useRef(null);
  const searchResult = useRef(null);

  const [input, setInput] = useState("");
  const debounce = useRef(null);
  const navigate = useNavigate();
  const [searchparam] = useSearchParams();
  const query = searchparam.get("query");

  useEffect(() => {
    searchResult.current.style.marginTop = `${searchBar.current.offsetHeight}px`;

    if (query) {
      fetch(`${searchAPI}&query=${query}`)
        .then(res => res.json())
        .then(result => setData(result.results))
        .catch(err => console.log(err.info));
    }
  }, [searchparam]);

  function inputHandler(event) {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setInput(() => event.target.value);
    }, 500);
  }
  return (
    <div className="search">
      <div id="searchBar" ref={searchBar}>
        <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <input
          type="text"
          placeholder="Search MovieFlix"
          onChange={event => inputHandler(event)}
        />
        <button
          onClick={() => navigate(`/search?query=${input}`, { replace: false })}
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </div>
      <div
        className="searchResult"
        ref={searchResult}
        style={{
          padding: data.length != 0 ? "0.5rem" : "0",
        }}
      >
        {data.map(item => {
          return <ImageCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Search;
