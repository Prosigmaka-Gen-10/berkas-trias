import { useState, useEffect } from "react";
import "../statte/lf.css";
const Api = [
  {
    id: 1,
    nama: "Seprai",
    harga: 80000,
    stoct: 5,
  },
  {
    id: 2,
    nama: "Bantal",
    harga: 25000,
    stoct: 5,
  },
  {
    id: 3,
    nama: "Selimut",
    harga: 50000,
    stoct: 5,
  },
  {
    id: 4,
    nama: "Kasur",
    harga: 1000000,
    stoct: 5,
  },
];

const LifeCycle = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function tambah(tambahproduct) {
    console.log("coba");
    const tmbhkeranjang = [...carts];
    tmbhkeranjang.push(tambahproduct);
    setCarts(tmbhkeranjang);
  }

  function hapus(hapuscart) {
    console.log("hapus");
    const hpscart = [...carts];
    hpscart.splice(hapuscart, 1);
    setCarts(hpscart);
  }

  useEffect(() => {
    setProducts(Api);
  }, []);

  useEffect(() => {
    let countTotalPrice = 0;


    for (const cart of carts) {
      countTotalPrice = countTotalPrice + cart.harga;
    }


    setTotalPrice(countTotalPrice);
  }, [carts]);

  return (
    <>
      <p>Produk</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Barang</th>
            <th>Stok</th>
            <th>Tambah</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{products.nama}</td>
              <td>Rp.{products.harga}</td>
              <td>{products.stoct}</td>
              <td>
                <button onClick={() => tambah(products)}>Tambah</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Cart Item</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Barang</th>
            <th>Stok</th>
            <th>Tambah</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{cart.nama}</td>
              <td>Rp.{cart.harga}</td>
              <td>{cart.stoct}</td>
              <td>
                <button onClick={() => hapus(cart)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>total harga: {totalPrice}</p>
    </>
  );
};

export default LifeCycle;
