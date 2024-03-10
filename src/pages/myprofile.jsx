import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/myprofile.css";
import "../CSS/watchList.css";
import "../CSS/favoriteList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import FavoriteCard from "../components/fav_watchCard";

function Myprofile() {
  const currentUser = useSelector(store => store.currentUser);
  const userDetails = useSelector(store => store.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch({ type: "logout" });
    navigate("/", { replace: true });
  }

  return (
    <>
      {currentUser.username ? (
        <div>
          {userDetails.map(item => {
            if (
              item.username == currentUser.username &&
              item.password == currentUser.password
            ) {
              return (
                <div key={item.username} className="myprofile">
                  <p>Username : {item.username}</p>
                  <p>Email : {item.email} </p>
                  <p>Phone : {item.phone} </p>
                  <button onClick={logout}>
                    <FontAwesomeIcon icon={faPowerOff} /> Logout
                  </button>
                  <button onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faHome} /> Go To Home
                  </button>

                  <div className="watchListContainer">
                    <h3>WatchList</h3>
                    {item.watchList.length == 0 ? (
                      <div>
                        Nothing Added to the List{" "}
                        <Link to={"/"} className="addNow">
                          {" "}
                          Add Now
                        </Link>
                      </div>
                    ) : (
                      <div className="watchList">
                        {item.watchList.map((movieId, index) => {
                          return (
                            <FavoriteCard
                              key={index}
                              movieId={movieId}
                              list={"watchList"}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="favoriteListContainer">
                    <h3>Favorite Movies</h3>

                    {item.favorite.length == 0 ? (
                      <div>
                        Nothing Added to the List{" "}
                        <Link to={"/"} className="addNow">
                          {" "}
                          Add Now
                        </Link>
                      </div>
                    ) : (
                      <div className="favoriteList">
                        {item.favorite.map((movieId, index) => {
                          return (
                            <FavoriteCard
                              key={index}
                              movieId={movieId}
                              list={"favorite"}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div>
          Login to account <Link to={"/login"}>Login</Link>
        </div>
      )}
    </>
  );
}

export default Myprofile;
