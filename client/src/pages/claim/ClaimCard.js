import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import { setDelete } from "../../redux/actions/claimActions";

import "./assets/claimCards.css";

const ClaimCard = () => {
  const claims = useSelector((state) => state.allClaims.claims.claims);
  const dispatch = useDispatch();

  const hadleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/claim/${id}`)
      .then((res) => {
        dispatch(setDelete());
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {claims === undefined ? (
        <Loader />
      ) : (
        <div>
          <h3>Total Available Claims: {claims.length}</h3>
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
        </div>
      )}
    </>
  );
};

export default ClaimCard;
