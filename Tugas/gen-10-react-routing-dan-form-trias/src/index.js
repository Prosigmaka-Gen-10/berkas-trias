import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import Blank from "./component/pages/Blank";
import Product from "./component/pages/Product";
import FeaturedProduct from "./component/pages/Product/FeaturedProduct";
import NewProduct from "./component/pages/Product/NewProduct";
import Users from "./component/pages/Users";
import UsersDetails from "./component/pages/Users/UsersDetails";
import Order from "./component/pages/Order";
import ListProduct from "./component/pages/Product/ListProduct";
import DetailProduk from "./component/pages/Product/DetailProduct";
import UpdateProduct from "./component/pages/Product/UpdateProduct";
import DeleteFeaturedProduct from "./component/pages/Product/DeleteFeaturedProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="product" element={<Product />}>
            {/* <Route index element={<Product />} /> */}
            <Route path="featured" element={<FeaturedProduct />}>
              <Route path="edit" element={<UpdateProduct />} />
              <Route path="hapus" element={<DeleteFeaturedProduct />} />
            </Route>
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UsersDetails />} />
          </Route>
          <Route path="list-produk" element={<ListProduct />} />
          <Route path="detail-produk/:namaproduk" element={<DetailProduk />} />
          <Route path="*" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
