import { NavLink } from "react-router-dom";
import "../CSS/navbar.css";
import { genresAPI } from "../assets/APIs&Key";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navbar = useRef();
  function slideLeft(event) {
    navbar.current.scrollBy(300, 0);
  }
  function slideRight(event) {
    navbar.current.scrollBy(-300, 0);
  }
  return (
    <div className="navbar-container">
      <button onClick={slideRight}>
        <FontAwesomeIcon icon={faCaretLeft} size="xl" />
      </button>
      <div className="navbar" ref={navbar}>
        <NavLink to="/" end>
          All
        </NavLink>
        <NavLink to={`/genres/action?genre=action&with_genres=28`}>
          Action
        </NavLink>
        <NavLink to={`/genres/adventure?genre=adventure&with_genres=12`}>
          Adventure
        </NavLink>
        <NavLink to={`/genres/animation?genre=animation&with_genres=16`}>
          Animantion
        </NavLink>
        <NavLink to={`/genres/comedy?genre=comedy&with_genres=35`}>
          Comedy
        </NavLink>
        <NavLink to={`/genres/crime?genre=crime&with_genres=80`}>Crime</NavLink>
        <NavLink to={`/genres/documentary?genre=documentary&with_genres=99`}>
          Documentary
        </NavLink>
        <NavLink to={`/genres/drama?genre=drama&with_genres=18`}>Drama</NavLink>
        <NavLink to={`/genres/family?genre=family&with_genres=10751`}>
          Family
        </NavLink>
        <NavLink to={`/genres/fantasy?genre=fantasy&with_genres=14`}>
          Fantasy
        </NavLink>
        <NavLink to={`/genres/history?genre=history&with_genres=36`}>
          History
        </NavLink>
        <NavLink to={`/genres/horror?genre=horror&with_genres=27`}>
          Horror
        </NavLink>
        <NavLink to={`/genres/music?genre=music&with_genres=10402`}>
          Music
        </NavLink>
        <NavLink to={`/genres/mistery?genre=mistery&with_genres=9648`}>
          Mistery
        </NavLink>
        <NavLink to={`/genres/romance?genre=romance&with_genres=10749`}>
          Romance
        </NavLink>
        <NavLink to={`/genres/sci-fi?genre=sci-fi&with_genres=878`}>
          Science Fiction
        </NavLink>
        <NavLink to={`/genres/tv-movies?genre=tv-movies&with_genres=10770`}>
          TV Movie
        </NavLink>
        <NavLink to={`/genres/thriller?genre=thriller&with_genres=53`}>
          Thriller
        </NavLink>
        <NavLink to={`/genres/war?genre=war&with_genres=10752`}>War</NavLink>
        <NavLink to={`/genres/western?genre=western&with_genres=37`}>
          Western
        </NavLink>
      </div>
      <button onClick={slideLeft}>
        <FontAwesomeIcon icon={faCaretRight} size="xl" />
      </button>
    </div>
  );
}

export default Navbar;
