import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const tokenString = JSON.parse(localStorage.getItem("accessToken"));
    if (!tokenString) {
      navigate(`/login`);
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
        <h3>Welcom to Dashboard</h3>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default Dashboard;
