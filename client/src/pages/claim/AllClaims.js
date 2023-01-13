import React, { useEffect, useState } from "react";
import axios from "axios";

import "./assets/allClaims.css";
import { useDispatch, useSelector } from "react-redux";
import { setClaims } from "../../redux/actions/claimActions";
import Form from "../../components/form/Form";
import ClaimCard from "./ClaimCard";

const AllClaims = () => {
  const claims = useSelector((state) => state.allClaims.claims.claims);
  console.log(claims);
  const del = useSelector((state)=> state.search.delete)
  const [loading, setLoading] = useState(true);


  const dispatch = useDispatch();
  console.log(del);

  const fetchAllClaims = async () => {
    const res = await axios
      .get(`http://localhost:8080/api/all-claims`)
      .catch((error) => console.log(error));
    dispatch(setClaims(res.data));
    setLoading(!loading);
  };

  useEffect(() => {
    fetchAllClaims();
  }, [del]);
  return (
    <section id="claims_list_section">
      <Form />
      <ClaimCard />
    </section>
  );
};

export default AllClaims;
