import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import MoviesByYear from "./components/moviesByYear";
import Genres from "./components/genres";
import ErrorPage from "./components/pageNotFound";
import "./CSS/media480.css";
import Search from "./components/search";
import Spinner from "./components/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Details from "./components/details";
import MultiGenres from "./components/multiGenres";

function App() {
  const [searchParam] = useSearchParams();
  const genreType = searchParam.get("genre");
  function upHandler() {
    window.scrollTo(0, 0);
  }
  console.log("app loaded");
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<MoviesByYear />} />
          <Route path={`/genres/${genreType}`} element={<Genres />} />
        </Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/details" element={<Details />} />
        <Route path="/multi-genres" element={<MultiGenres />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <button className="scrollUp" onClick={upHandler}>
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </button>
    </div>
  );
}

export default App;
