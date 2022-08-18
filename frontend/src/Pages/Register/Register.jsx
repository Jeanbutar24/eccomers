import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Register.css";
import { padlock, person, emailIcon } from "../../icons/index";
import { useState } from "react";
import { publicRequest } from "../../requestMethods";
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const postRegister = async () => {
    const response = await publicRequest.post("/auth/register", {
      username,
      password,
      email,
    });
    alert("Succses Register with Username:" + response.data.username);
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="containerRegister">
        <h1>Register </h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="username">
              <img src={person} alt="" width={25} height={25} />
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="email">
              <img src={emailIcon} alt="" width={25} height={25} />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
            <button onClick={postRegister}>Register</button>
          </form>

          <Link to="/login">
            <p className="link">Silahkan, Login</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
