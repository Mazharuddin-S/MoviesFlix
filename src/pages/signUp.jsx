import { Link, useNavigate } from "react-router-dom";
import "../CSS/signUp.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

function SignUp() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = useRef(null);
  const confirmPass = useRef(null);
  const [signupDetails, setSignupDetails] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  function signUpHandler(event) {
    event.preventDefault();
    if (password.current.value != confirmPass.current.value) {
      setError(true);
    } else {
      setError(false);
      dispatch({
        type: "newUser",
        payload: {
          ...signupDetails,
          isLoggedIn: false,
          watchList: [],
          favorite: [],
        },
      });
      navigate("/login", { replace: true });
    }
  }
  return (
    <div className="signUp">
      <form className="signUpDetails" onSubmit={signUpHandler}>
        <span style={{ display: error ? "inline" : "none", color: "red" }}>
          Password didn't matched
        </span>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            required
            onChange={event => {
              setSignupDetails(prev => {
                return { ...prev, username: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            onChange={event => {
              setSignupDetails(prev => {
                return { ...prev, email: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            ref={password}
            onChange={event => {
              setSignupDetails(prev => {
                return { ...prev, password: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" required ref={confirmPass} />
        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input
            type="text"
            onChange={event => {
              setSignupDetails(prev => {
                return { ...prev, phone: event.target.value };
              });
            }}
          />
        </div>
        <button type="submit">Register</button>
        <span>
          <Link to={"/login"}>Login screen</Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
