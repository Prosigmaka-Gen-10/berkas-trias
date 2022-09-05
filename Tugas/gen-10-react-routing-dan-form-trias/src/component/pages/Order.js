import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      Order confirm
      <button onClick={() => navigate(-1)}>
        <Link to="/"></Link> go to homePage
      </button>
    </div>
  );
};

export default Order;
