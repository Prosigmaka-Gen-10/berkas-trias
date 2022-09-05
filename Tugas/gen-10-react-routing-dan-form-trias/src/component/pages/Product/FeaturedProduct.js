import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const FeaturedProduct = () => {
   const navigate = useNavigate()
  return (
    <div>
      <h3>FeaturedProduct</h3>
      <br /> 
      <br /> 
      <button onClick={()=> navigate("edit")}>
        Update Featured Product
      </button>
      <span>  </span>
      <button onClick={()=> navigate("hapus")}>
        Delete Featured Product
      </button>
      <Outlet />
    </div>
  );
};

export default FeaturedProduct;
