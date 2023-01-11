import React, { useEffect, useState } from "react";
import axios from "axios";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "./assets/allClaims.css";
import { useDispatch, useSelector } from "react-redux";
import { setClaims } from "../../redux/actions/claimActions";
import { Link } from "react-router-dom";

import Loader from '../../components/loader/Loader'
import Form from "../../components/form/Form";

const AllClaims = () => {
  const claims = useSelector((state) => state.allClaims.claims.claims);
  console.log(claims);
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchClaims = async () => {
    const res = await axios
      .get(`http://localhost:8080/api/all-claims`)
      .catch((error) => console.log(error));
    dispatch(setClaims(res.data));
    setLoading(!loading)
  };

  const hadleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/claim/${id}`)
      .then((res) => {
        setDeleted(!deleted);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    // dispatch(setClaims(res.data));
  };

  useEffect(() => {
    fetchClaims();
  }, [deleted]);
  return (
    <>
      {claims === undefined && loading? (
        <Loader/>
        // <h1>HEllo</h1>
        ) : (

        <section id="claims_list_section">
         <Form/>
          <div className="claim_cards">
            {claims.map((claim) => {
              return (
                <div className="card_item" key={claim._id}>
                  <div className="claim_details">
                    <h5>Policy ID</h5>
                    <p>{claim.policyId}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Hospital</h5>
                    <p>{claim.hospital}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Name</h5>
                    <p>{claim.name}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Age</h5>
                    <p>{claim.age}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Created On</h5>
                    <p>{claim.date}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Status</h5>
                    <p>{claim.status}</p>
                  </div>
                  <div className="claim_details">
                    <h5>Address</h5>
                    <p>{claim.address}</p>
                  </div>
                  <div className="action_button">
                    <Link to={`/edit/${claim._id}`}>
                      <ModeEditOutlineIcon className="action_btn edit_btn" />
                    </Link>
                    <Link>
                      <DeleteIcon
                        onClick={() => hadleDelete(claim._id)}
                        className="action_btn delete_btn"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default AllClaims;
