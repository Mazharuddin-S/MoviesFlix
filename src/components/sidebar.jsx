import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/sidebar.css";
import {
  faArrowRight,
  faCaretDown,
  faBars,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

import { genresAPI } from "../assets/APIs&Key";
import { useNavigate } from "react-router";

function SideBar() {
  const [genreDisplay, setGenreDisplay] = useState(false);
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [genre, setGenres] = useState([]);
  const sidebarRef = useRef();

  function closeSideBar() {
    let width = sidebarRef.current.offsetWidth;
    console.log(width);
    sidebarRef.current.style.right = `-${width}px`;
    setSidebar(false);
  }

  function openSidebar() {
    sidebarRef.current.style.right = "0";
    setSidebar(true);
  }

  function checkHandler(event) {
    setGenres(prev => {
      return [...prev, event.target.value];
    });
  }
  return (
    <div className="sidebar" ref={sidebarRef}>
      <button
        className="closeSidebar"
        onClick={closeSideBar}
        style={{ display: sidebar ? "block" : "none" }}
      >
        <FontAwesomeIcon icon={faArrowRight} size="xl" />
      </button>
      <button
        className="openSidebar"
        onClick={openSidebar}
        style={{ display: sidebar ? "none" : "block" }}
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      <h3>MoviesFlix</h3>
      <div>
        <div className="sideBarGenre">
          <div onClick={() => setGenreDisplay(!genreDisplay)}>
            <span>
              <FontAwesomeIcon
                icon={faGlobe}
                color="skyblue"
                size="xl"
                style={{ marginRight: "1rem" }}
              />
              Genres
            </span>
            <span
              style={{
                transform: genreDisplay ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
          <div style={{ display: genreDisplay ? "block" : "none" }}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={28}
                  onChange={event => checkHandler(event)}
                />
                <label>Action</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={12}
                  onChange={event => checkHandler(event)}
                />
                <label>Adventure</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={16}
                  onChange={event => checkHandler(event)}
                />
                <label>Animation</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={35}
                  onChange={event => checkHandler(event)}
                />
                <label>Comedy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={80}
                  onChange={event => checkHandler(event)}
                />
                <label>Crime</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={99}
                  onChange={event => checkHandler(event)}
                />
                <label>Documentary</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={18}
                  onChange={event => checkHandler(event)}
                />
                <label>Drama</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={10751}
                  onChange={event => checkHandler(event)}
                />
                <label>Family</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={14}
                  onChange={event => checkHandler(event)}
                />
                <label>Fantasy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={36}
                  onChange={event => checkHandler(event)}
                />
                <label>History</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={27}
                  onChange={event => checkHandler(event)}
                />
                <label>Horror</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={10402}
                  onChange={event => checkHandler(event)}
                />
                <label>Music</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={9648}
                  onChange={event => checkHandler(event)}
                />
                <label>Mystery</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={10749}
                  onChange={event => checkHandler(event)}
                />
                <label>Romance</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={878}
                  onChange={event => checkHandler(event)}
                />
                <label>Sci-Fi</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={10770}
                  onChange={event => checkHandler(event)}
                />
                <label>TV Movie</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={53}
                  onChange={event => checkHandler(event)}
                />
                <label>Thriller</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={10752}
                  onChange={event => checkHandler(event)}
                />
                <label>War</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={37}
                  onChange={event => checkHandler(event)}
                />
                <label>Western</label>
              </li>
            </ul>
            <button
              onClick={() =>
                navigate(`/multi-genres?with_genres=${genre.join(",")}`)
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
