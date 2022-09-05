import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      {/* <input placeholder="Search Products" type="search" /> */}
      <br/>
      <nav>
        <Link to="featured">Featured</Link>
        <span> | </span>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Products;