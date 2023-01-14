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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const postClaim = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    await axios
      .post("http://localhost:8080/api/claims", formData)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        // console.log(formData);
        setFormData(initialValues);
        // console.log(formData)
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
                value={formData.hospital}
                placeholder="Hospital Name*"
                onChange={handleChange}
                required
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
                value={formData.name}
                placeholder="Beneficiary's Full Name*"
                onChange={handleChange}
                required
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
                value={formData.age}
                placeholder="Age"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="item">
            <div className="item_input">
              <PhoneAndroidIcon />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
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
                value={formData.policyId}
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
                value={formData.status}
                onChange={handleChange}
                className="status_select"
                required
              >
                <option value="open" required>Status*</option>
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
                value={formData.date}
                placeholder="Date"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="btn_back" onClick={()=>navigate('/all-claims')}>
            Back
          </button>
          <button className="btn" type="submit">
            Create New Claim
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default CreateClaim;
