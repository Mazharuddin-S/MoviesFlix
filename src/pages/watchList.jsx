import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WatchList() {
  const currentUser = useSelector(store => store.currentUser);
  const data = useSelector(store => store.data);
  const userData = data.find(
    item =>
      item.username == currentUser.username &&
      item.password == currentUser.password
  );

  return (
    <>
      {userData.watchList.length == 0 ? (
        <div>
          Nothing added to the list : <Link to={"/"}> Add Now</Link>
        </div>
      ) : (
        <div className="watchlist"> </div>
      )}
    </>
  );
}

export default WatchList;
