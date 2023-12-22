import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function rating(x) {
  //x = 7.8
  let stars = [];
  for (var i = 1; i <= Math.floor(x); i++) {
    stars.push(<FontAwesomeIcon icon={faStar} color="gold" />);
  }
  for (var i = Math.floor(x) + 1; i <= 10; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  return stars;
}
