import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <button onClick={() => navigate("order")}>PlaceOrder</button>
    </div>
  );
};

export default Home;
