import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/favoriteList.css";

function FavoriteList() {
  const currentUser = useSelector(store => store.currentUser);
  const data = useSelector(store => store.data);
  const favoriteList = data.find(
    item =>
      item.username == currentUser.username &&
      item.password == currentUser.password
  );
  console.log(favoriteList);
  return (
    <>
      {favoriteList.favorite.length == 0 ? (
        <div>
          Nothing added to the list : <Link to={"/"}> Add Now</Link>
        </div>
      ) : (
        <div className=""> </div>
      )}
    </>
  );
}

export default FavoriteList;
