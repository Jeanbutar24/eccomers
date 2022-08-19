import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import "./Address.css";
const Address = () => {
  const [jalan, setJalan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [negara, setNegara] = useState("");
  const [address, setAddress] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();

    const postAddress = async () => {
      try {
        const response = await userRequest.post("/address/addAddress", {
          userId: user._id,
          alamat: [
            {
              jalan,
              kelurahan,
              kecamatan,
              kabupaten,
              provinsi,
              negara,
            },
          ],
        });
        setAddress(response.data);
      } catch (error) {}
    };
    postAddress();
  };

  return (
    <div className="address">
      <div className="containerAddres">
        <h1 className="title">Tambahkan Alamat</h1>
        <form onSubmit={handleSubmit}>
          <div className="addressInput">
            <label htmlFor="">jalan</label>
            <input
              type="text"
              placeholder="jalan"
              onChange={(e) => setJalan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kelurahan/desa</label>
            <input
              type="text"
              placeholder="kelurahan/desa"
              onChange={(e) => setKelurahan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kecamatan</label>
            <input
              type="text"
              placeholder="kecamatan"
              onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kabupaten/kota</label>
            <input
              type="text"
              placeholder="kabupaten/kota"
              onChange={(e) => setKabupaten(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">Provinsi</label>
            <input
              type="text"
              placeholder="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">negara</label>
            <input
              type="text"
              placeholder="negara"
              onChange={(e) => setNegara(e.target.value)}
            />
          </div>
          <button className="buttonAddress">Submit</button>
        </form>
      </div>
      <div className="addressUser">
       {address.map((item, index))=>(
        <p>{item.jalan}</p>
       )}
      </div>
    </div>
  );
};

export default Address;
