import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/loginPg.css";
import {
  faEye,
  faEyeDropperEmpty,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const data = useSelector(state => {
    return state.data;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef(null);
  const passRef = useRef(null);
  const [error, setError] = useState(false);
  const [userEye, setuserEye] = useState(false);
  const [passEye, setpassEye] = useState(false);

  function changeuserType() {
    if (userRef.current.type == "password") {
      userRef.current.type = "text";
      setuserEye(true);
    } else {
      userRef.current.type = "password";
      setuserEye(false);
    }
  }
  function changepassType() {
    if (passRef.current.type == "password") {
      passRef.current.type = "text";
      setpassEye(true);
    } else {
      passRef.current.type = "password";
      setpassEye(false);
    }
  }
  function submitLogin(event) {
    event.preventDefault();

    const index = data.findIndex(item => {
      return (
        item.username == userRef.current.value &&
        item.password == passRef.current.value
      );
    });
    if (index != -1) {
      setError(false);
      console.log("user Identified");
      dispatch({
        type: "loggedIn",
        payload: {
          username: userRef.current.value,
          password: passRef.current.value,
        },
      });
      navigate("/myprofile", { replace: true });
    } else {
      setError(true);
    }
  }

  return (
    <div className="loginPg">
      <form className="loginDetails" onSubmit={submitLogin}>
        <span style={{ display: error ? "inline" : "none", color: "red" }}>
          Invalid username or password
        </span>
        <div className="loginUsername">
          <input
            type="password"
            placeholder="username"
            ref={userRef}
            required
          />
          <span onClick={changeuserType}>
            <FontAwesomeIcon icon={userEye ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className="loginPass">
          <input
            type="password"
            placeholder="password"
            ref={passRef}
            required
          />
          <span onClick={changepassType}>
            <FontAwesomeIcon icon={passEye ? faEyeSlash : faEye} />
          </span>
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have account ?<Link to={"/signUp"}>SignUp</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
