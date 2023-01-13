import axios from "axios";
import React, { useState } from "react";

import "./assets/createClaim.css";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BusinessIcon from "@mui/icons-material/Business";
import PolicyIcon from "@mui/icons-material/Policy";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TodayIcon from "@mui/icons-material/Today";

const initialValues = {
  name: "",
  hospital: "",
  age: "",
  phone: "",
  address: "",
  policyId: "",
  status: "open",
  date: "",
};

const CreateClaim = () => {
  const [formData, setFormData] = useState(initialValues);
  // const [updated, setUpdated] = useState(false);

  const postClaim = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    await axios
      .post("http://localhost:8080/api/claims", formData)
      .then((res) => {
        console.log(res.data);
        console.log(formData);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    // console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="create_claim">
      <div className="form_wrapper">
        <div className="form_title">
          <h2>Create New Claim</h2>
        </div>
        <form action="" method="post" onSubmit={postClaim}>
          <div className="item">
            <div className="item_input">
              <LocalHospitalIcon />
              <input
                type="text"
                id="hospital"
                name="hospital"
                placeholder="Hospital Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="item">
            <div className="item_input">
              <PersonIcon />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Beneficiary's Full Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="item">
            <div className="item_input">
              <PanoramaFishEyeIcon />
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Age"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="item">
            <div className="item_input">
              <PhoneAndroidIcon />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="item">
            <div className="item_input">
              <BusinessIcon />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="item">
            <div className="item_input">
              <PolicyIcon />
              <input
                type="text"
                id="policyId"
                name="policyId"
                placeholder="Policy Id*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="item">
            <div className="item_input">
              <DonutSmallIcon />
              <select
                name="status"
                id=""
                onChange={handleChange}
                className="status_select"
              >
                <option value="open">Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="In-Progress">In-Progress</option>
              </select>
            </div>
          </div>
          <div className="item">
            <div className="item_input">
              <TodayIcon />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Create New Claim
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateClaim;
