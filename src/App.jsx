import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import MoviesByYear from "./pages/moviesByYear";
import Genres from "./pages/genres";
import ErrorPage from "./pages/pageNotFound";
import "./CSS/media480.css";
import Search from "./pages/search";
import Spinner from "./components/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Details from "./pages/details";
import MultiGenres from "./pages/multiGenres";
import Login from "./pages/loginPg";
import SignUp from "./pages/signUp";
import FavoriteList from "./pages/favoriteList";
import WatchList from "./pages/watchList";
import Myprofile from "./pages/myprofile";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<MoviesByYear />} />
          <Route path={`/genres/${genreType}`} element={<Genres />} />
        </Route>
        <Route path="/favorite" element={<FavoriteList />} />
        <Route path="/watchlist" element={<WatchList />} />

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
