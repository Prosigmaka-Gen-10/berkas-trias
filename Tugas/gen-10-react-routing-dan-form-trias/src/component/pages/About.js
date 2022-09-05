import React, { useState } from "react";

const About = () => {
  const [nama, setNama] = useState();
  const [hari, setHari] = useState(Date.now);
  const [gender, setGender] = useState();

  function handleInputNama(e) {
    setNama(e.target.value);
  }

  function handleSubmit() {
    const data = {
      nama: nama,
      hari: hari,
      gender: gender,
    };
    console.log(data);
  }
  return (
    <>
      <h1>About</h1>
      <label>
        Nama Anda: <br />
        <input type="text" onChange={handleInputNama} value={nama} />
      </label>
      <br />
      <br />
      <label>
        Hari: <br />
        <select onChange={(event) => setHari(event.target.value)} value={hari}>
          <option value="senin">Senin</option>
          <option value="selasa">Selasa</option>
          <option value="rabu">Rabu</option>
          <option value="kamis">Kamis</option>
          <option value="jumat">Jumat</option>
        </select>
      </label>
      <br />
      <br />
      Jenis Kelamin: <br />
      <label>
        <input
          type="radio"
          value="l"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "l" ? true : false}
        />
        Laki laki
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="p"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          checked={gender === "p" ? true : false}
        />
        Perempuan
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default About;
