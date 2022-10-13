import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const tokenString = JSON.parse(localStorage.getItem("accessToken"));
    console.log(tokenString);
    if (!tokenString) {
      navigate(`/login`);
    } else {
      setFormData(tokenString.user_details.referral_code);
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <div>
      <div className="dashboard d-flex justify-content-around align-items-center">
        <div>
          <h3>Welcom to Dashboard</h3>
          {formData && <p>Your refferal link is: {formData && formData}</p>}
        </div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default Dashboard;
