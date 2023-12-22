import Navbar from "./navbar";
import "../CSS/header.css";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div>
        <div className="logo">MovieFlix</div>
        <div>
          <button
            className="searchBtn"
            onClick={() => navigate("/search", { replace: true })}
          >
            <FontAwesomeIcon icon={faSearch} size="xl" />
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
export default Header;
