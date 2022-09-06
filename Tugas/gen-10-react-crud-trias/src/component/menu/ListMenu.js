import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/menu.css";

const ListMenu = () => {
  const originalForm = {
    username: "",
    email: "",
    nim: "",
    address: "",
  };

  const [menu, setMenu] = useState([]);
  const [formInput, setFormInput] = useState({ ...originalForm });

  async function getAllMenu() {
    try {
      const resp = await axios.get("http://localhost:3001/users");
      console.log(resp.data);
      setMenu(resp.data);
    } catch (err) {
      console.log(err);
      alert("ada masalah saat mengambil data")
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formInput.id) {
      updateMenu();
    } else {
      createMenu();
    }
    setFormInput({ ...originalForm });
  }

  async function createMenu() {
    try {
      await axios.post("http://localhost:3001/users", formInput);
      getAllMenu();
      alert("data berhasil di tambah");
    } catch (error) {
      console.log("error");
      alert("ada masalah saat mengambil data")
    }
  }
  async function updateMenu() {
    try {
      await axios.put("http://localhost:3001/users/" + formInput.id, formInput);
      getAllMenu();
      alert("data berhasil di ubah");
    } catch (error) {
      console.log(error);
      alert("ada masalah saat mengambil data")
    }
  }

  function handleInput(event, probs) {
    const add = { ...formInput };
    add[probs] = event.target.value;
    setFormInput(add);
  }

  function prepareUpdate(products) {
    setFormInput({ ...products });
  }

  async function prepareDelete(productId){
    try {
        await axios.delete("http://localhost:3001/users/" + productId)
        getAllMenu()
        alert("data berhasil di hapus")
    } catch (error) {
        console.log(error)
        alert("ada masalah saat mengambil data")
    }
  }

  useEffect(() => {
    getAllMenu();
  }, []);

  return (
    <div>
      <br />
      {/* <button onClick={getAllMenu}>Cek data</button> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Input User</h2>
        <label>
          Nim Anda :
          <input
            type="number"
            value={formInput.nim}
            onChange={(event) => handleInput(event, "nim")}
          />
        </label>
        <br />
        <br />
        <label>
          username :
          <input
            type="text"
            value={formInput.username}
            onChange={(event) => handleInput(event, "username")}
          />
        </label>
        <br />
        <br />
        <label>
          email :
          <input
            type="email"
            value={formInput.email}
            onChange={(event) => handleInput(event, "email")}
          />
        </label>
        <br />
        <br />
        <label>
          address :
          <input
            type="text"
            value={formInput.address}
            onChange={(event) => handleInput(event, "address")}
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Nim</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((products) => (
            <tr key={products.id}>
              {/* <td>{products.id}</td> */}
              <td>{products.nim}</td>
              <td>{products.username}</td>
              <td>{products.email}</td>
              <td>{products.address}</td>
              <td>
                <button onClick={() => prepareUpdate(products)}>Update</button>
              </td>
              <td>
                <button onClick={() => prepareDelete(products.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMenu;
