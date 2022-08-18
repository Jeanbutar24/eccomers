import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Login.css";
import { padlock, person } from "../../icons/index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/APIuser";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="containerLogin">
        <h1>Login </h1>
        <div className="wrapper">
          <form>
            <div className="username">
              <img src={person} alt="" width={25} height={25} />
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <img src={padlock} alt="" width={25} height={25} />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error ? (
              <span style={{ color: "red" }}> Something Wrong</span>
            ) : (
              ""
            )}
          </form>

          <Link to="/register">
            <p className="link">Silahkan, Register</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
