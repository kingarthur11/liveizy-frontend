import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const tokenString = JSON.parse(localStorage.getItem("accessToken"));

    if (!tokenString) {
      navigate(`/login`);
    } else {
      setFormData(tokenString);
    }
  }, []);
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate(`/login`);
  };

  // console.log(formData)

  return (
    <div>
      <div className="dashboard d-flex justify-content-around align-items-center">
        <div>
          <h3>Welcom to Dashboard</h3>
          <p>Your refferal link is: {formData && formData.user_details.referral_code}</p>
        </div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default Dashboard;
