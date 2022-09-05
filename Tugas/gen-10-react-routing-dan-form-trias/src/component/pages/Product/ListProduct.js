import { Link, Outlet } from "react-router-dom";

export default function ListProduct() {
  const Product = [
    {
      id: 1,
      nama: "Jamtangan",
    },
    {
      id: 2,
      nama: "Baju",
    },
    {
      id: 3,
      nama: "Celana",
    },
  ];
  return (
    <>
      <h2>Daftar Product</h2>
      <ul>
        {Product.map((item) => (
          <li>
            <Link to={`/detail-produk/${item.nama}`} key={item.id}>
              {item.nama} | Lihat Detail
            </Link>
          </li>
        ))}
        <Outlet />
      </ul>
    </>
  );
}
