import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

//global hook
import { GlobalAuthHook } from "../../Context/authContext";

//css
import "../../CSS/Login.css";
import "react-toastify/dist/ReactToastify.css";

//icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa"


const Register = () => {

  const [state, setState] = GlobalAuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [click, setClick] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://daraz-api.onrender.com/api/v1/auth/login",
        { email, password, }
      );
      if (res.data.success) {
        toast.success('user is Login');
        setState({
          ...state,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem("auth", JSON.stringify(res.data))
        navigate(location.state || '/')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <ToastContainer />
      <form onSubmit={handleRegistration} className="login-form">


        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
            autoComplete="none"
            required
          />
        </div>
        <div className="password-div">
          <label htmlFor="">Password</label>
          <input
            type={click ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            autoComplete="none"
            required
          />
          <div className="hide-show-password" onClick={() => setClick(!click)} > {click ? <FaRegEye type="checkbox" className="see" /> : <FaRegEyeSlash className="dont-see" />} </div>
        </div>


        <button type="submit" className="sign-in-btn">
          Sign in
        </button>

      </form>

      <p className="">not a member please
        <Link to='/Register'>
          Register
        </Link>
      </p>

    </div>
  );
};

export default Register;
