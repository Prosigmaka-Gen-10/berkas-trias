import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddMenu = () => {
  const originalForm = {
    username: "",
    email: "",
    nim: "",
    address: "",
  };

  const [formInput, setFormInput] = useState({ ...originalForm });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createMenu();

    setFormInput({ ...originalForm });
  }

  async function createMenu() {
    try {
      await axios.post("http://localhost:3001/users", formInput);
      navigate("/");
      alert("data berhasil di tambah");
    } catch (error) {
      console.log("error");
      alert("ada masalah saat mengambil data");
    }
  }

  function handleInput(event, probs) {
    const add = { ...formInput };
    add[probs] = event.target.value;
    setFormInput(add);
  }
  return (
    <div>
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
        <span> </span>
        <Link to={"/"}>Batal</Link>
      </form>
    </div>
  );
};

export default AddMenu;
