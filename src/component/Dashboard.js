import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './dashboard.css'
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(() => {
    
    const tokenString = JSON.parse(localStorage.getItem("accessToken"));
    if (!tokenString) {
      navigate(`/login`);
    }
  }, []);
  return (
    <div>
        <div className='dashboard'>
            <h3>Welcom to Dashboard</h3>
        </div>
    </div>
  )
}

export default Dashboard