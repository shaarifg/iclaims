import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setClaim } from "../../redux/actions/claimActions";
import React from "react";

import "./assets/editClaim.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@mui/material/Button";

const EditClaim = () => {
  const { id } = useParams();
  const claim = useSelector((state) => state.claim.claim);
  const [formData, setFormData] = useState(claim);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateClaim = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/claim/${id}`, formData)
      .then((res)=>{
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      // .then(navigate('/all-claims'))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const fetchClaim = async () => {
      const res = await axios
        .get(`http://localhost:8080/api/claim/${id}`)
        .catch((error) => console.log(error));
      dispatch(setClaim(res.data.claim));
      setFormData(res.data.claim);
    };
    fetchClaim();
  }, []);
  return (
    <section className="edit_claim">
      <h2>Update The Claim</h2>
      <form action="" className="update_claim" onSubmit={updateClaim}>
        <div className="input_item">
          <label htmlFor="policyId">PolicyId:</label>
          <input
            type="text"
            name="policyId"
            id="policy"
            value={formData.policyId}
            onChange={handleChange}
          />
        </div>

        <div className="input_item">
          <label htmlFor="hospital">Hospital:</label>
          <input
            type="text"
            name="hospital"
            id="policy"
            value={formData.hospital}
            onChange={handleChange}
          />
        </div>

        <div className="input_item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="policy"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="policy"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="input_item">
          <label htmlFor="status">Status:</label>
          <select name="status" id="" onChange={handleChange} className="">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="In-Progress">In-Progress</option>
          </select>
        </div>
        <div className="input_item">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="update_btns">
          <Button
            to="/all-claims"
            variant="contained"
            className="btn"
            onClick={() => navigate("/all-claims")}
            sx={{ backgroundColor: "#F7770F" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            className="btn"
            sx={{ backgroundColor: "#F7770F" }}
          >
            Update Claim
          </Button>
        </div>
        <ToastContainer />
      </form>
    </section>
  );
};

export default EditClaim;
