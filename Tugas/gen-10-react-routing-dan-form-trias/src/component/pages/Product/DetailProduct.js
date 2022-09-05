import { useParams, Outlet, Link, useNavigate } from "react-router-dom";

export default function DetailProduk() {
  const { namaproduk } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Nama Product</h2>
      <p>{namaproduk}</p>
      <button onClick={() => navigate(-1)}>
        <Link to="/list-produk"></Link>
        Product
      </button>
      <Outlet />
    </div>
  );
}
