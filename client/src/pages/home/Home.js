import { Link } from "react-router-dom";

import reactIcon from "./assets/react.svg";
import mongoIcon from "./assets/mongodb.svg";
import nodeIcon from "./assets/nodejs.svg";
import expressIcon from "./assets/express.svg";
import materialIcon from "./assets/material-ui.svg";
import hero from "../claim/assets/hero.svg";
import "./home.css";
import Form from "../../components/form/Form";
import ClaimCard from "../claim/ClaimCard";
import { useSelector } from "react-redux";
const Home = () => {
  const search = useSelector((state) => state.search.search);
  console.log(search);
  return (
    <>
      <section id="hero_section">
        <div className="about_app">
          <h1>Welcome To iClaims</h1>
          <p>An Insurance Claims Management System</p>
          <p className="app_desc">
            An insurance claims management webapp is a tool that allows
            insurance companies and their clients to manage the process of
            submitting, reviewing, and resolving insurance claims online. This
            webapp includes features such as the ability to submit claims
            electronically, track the status of claims, and communicate with
            insurance adjusters. Clients can also access their policy
            information, review claim history.
          </p>
        </div>
        <div className="main_pic">
          <img src={hero} alt="" />
        </div>
      </section>
      <section id="use_section" className="section_container">
        <div className="title_desc">
          <h3>How To Use This WebApp</h3>
          <h5>You can enjoy following features</h5>
        </div>
        <div className="use_cards_wrapper">
          <div className="use_card">
            <h4>You can Create a new Claim</h4>
            <p>
              To create a new claim click the button below and provide the
              necessary informations.
            </p>
            <Link to="/create-claim" className="use_btns">
              Create New Claim
            </Link>
          </div>
          <div className="use_card">
            <h4>You can see all available Claims</h4>
            <p>
              To see all the created claims press the button below or go to See
              All Claims page.
            </p>
            <Link to="/all-claims" className="use_btns">
              See All Claims
            </Link>
          </div>
          <div className="use_card">
            <h4>You can Search a Claim</h4>
            <p>
              You can Search any claim by entering Beneficiary's Name, PolicyID
              or Hospital Name.
            </p>
            <a href="#search_section" className="use_btns">
              Search Any Claim
            </a>
          </div>
        </div>
      </section>

      <section id="search_section" className="section_container">
        <div className="title_desc">
          <h3>Search Any Claim</h3>
          <h5>
            Search any claim by entering Beneficiary's Name, PolicyID or
            Hospital Name
          </h5>
        </div>
        <Form />
        {search && <ClaimCard />}
      </section>

      <section id="tech_section" className="section_container">
        <div className="title_desc">
          <h3>Technologies Used</h3>
          <h5>I used follwoing Technologies to Develop this WebApp</h5>
        </div>
        <div className="tech_svgs">
          <div className="svg">
            <p>NodeJS</p>
            <img src={nodeIcon} alt="" />
          </div>
          <div className="svg">
            <p>ExpressJs</p>
            <img src={expressIcon} alt="" />
          </div>
          <div className="svg">
            <p>ReactJs</p>
            <img src={reactIcon} alt="" />
          </div>
          <div className="svg">
            <p>MongoDb</p>
            <img src={mongoIcon} alt="" />
          </div>
          <div className="svg">
            <p>MaterialUI</p>
            <img src={materialIcon} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
