import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Dashboard from "./Dashboard";

const Register = () => {
  const navigate = useNavigate();
  const tokenString = JSON.parse(localStorage.getItem("accessToken"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onInputChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const RegisterUser = async (obj) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}register`,
        obj
      );
      const formData = await response.data;
      setIsLoading(false);
      navigate(`/login`);
      if (formData) {
        setIsLoading(false);
      }
      return { formData };
    } catch (error) {
      const message = error.response;
      setIsLoading(false);
      return { message };
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    RegisterUser(formData);
  };

  useEffect(() => {
    if (tokenString) {
        navigate(`/`)
    }
  }, []);

  return (
    <div className="login-content">
      <div className="left-side">
        <div className="left-content">
          <h4>
            “If you want to go quickly, go alone. If you want to go far, go
            together.”– African Proverb
          </h4>
        </div>
      </div>
      <div className="righ-side">
        <div className="right-content text-center">
          <h3 className="py-3">Register a New Account</h3>
          <h4 className="py-3">Input your details to create an account</h4>
          <form onSubmit={onFormSubmit}>
            <input
              className="w-100 my-3"
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <input
              className="w-100 my-3"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => onInputChange(e)}
            />
            <input
              className="w-100 my-3"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => onInputChange(e)}
            />
            <p className="pb-5 pt-3 text-remember">Remember password</p>
            {isLoading ? (
              <button color="primary" disabled>
                Loading...
              </button>
            ) : (
              <button type="submit">Sign Up</button>
            )}
          </form>
          <p className="py-3">
            {" "}
            Already have an account?{" "}
            <span className="text-primary">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
