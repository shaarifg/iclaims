import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import { setClaims } from "../../redux/actions/claimActions";
import axios from "axios";

const Form = () => {
  const claims = useSelector((state) => state.allClaims.claims.claims);
  const dispatch = useDispatch();
  console.log(claims);
  const [placeholder, setPlaceholder] = useState("name");
  const [value, setValue] = useState("");

  console.log(placeholder);
  const handleChange = (e) => {
    setPlaceholder(e.target.value);
  };
  console.log(value);

  const fetchClaims = async (e) => {
    e.preventDefault();
    const res = await axios
      .get(
        `http://localhost:8080/api/claims/${placeholder}?${placeholder}=${value}`
      )
      .catch((error) => console.log(error));
    dispatch(setClaims(res.data));
    
  };

  return (
    <>
      <div id="form">
        <form action="" className="filter_form" onSubmit={fetchClaims}>
          <label htmlFor="select_value">
            Search By:
            <select name="type" id="select_value" onChange={handleChange}>
              <option defaultValue="name">Name</option>
              <option value="policyId">Policy Id</option>
              <option value="hospital">Hospital Name</option>
            </select>
          </label>
          <div className="input_btn">
            <input
              type="text"
              placeholder={`Enter ${placeholder}`}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="search_btn" type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default Form;
