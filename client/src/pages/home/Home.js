import React, { useState } from "react";
// import UseCaseLiveFilter from '../UseCaseLiveFilter';

import { Link } from "react-router-dom";

import reactIcon from './assets/react.svg'
import mongoIcon from './assets/mongodb.svg'
import nodeIcon from './assets/nodejs.svg'
import expressIcon from './assets/express.svg'
import materialIcon from './assets/material-ui.svg'
import hero from '../claim/assets/hero.svg'
import "./home.css";
import Form from "../../components/form/Form";
import ClaimCard from "../claim/ClaimCard";
import { useSelector } from "react-redux";
const Home = () => {
  const search = useSelector(state => state.search.search)
  console.log(search)
  return (
    <>
      <section id="hero_section">
        <div className="about_app">
          <h1>Welcome To iClaims</h1>
          <p>An Insurance Claims Management System</p>
          <p className="app_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere in
            nemo asperiores voluptatum minima quis nobis nostrum nesciunt,
            ducimus voluptate.
          </p>
        </div>
        <div className="main_pic">
        <img src={hero} alt="" />
        </div>
      </section>
      <section id="use_section" className="section_container">
        <h3>How To Use This Website</h3>
        <div className="use_cards_wrapper">
          <div className="use_card">
            <h4>You can Create a new Claim</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              omnis?
            </p>
            <Link to="/create-claim">Create New Claim</Link>
          </div>
          <div className="use_card">
            <h4>You can see all available Claims</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              omnis?
            </p>
            <Link to="/all-claims">See All Claims</Link>
          </div>
          <div className="use_card">
            <h4>You Search a Claim</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              omnis?
            </p>
            <a href="#search_section">Search Any Claim</a>
          </div>
        </div>
      </section>

      <section id="search_section" className="section_container">
        <h3>Search Any Claim</h3>
        <Form/>
        {
          search && <ClaimCard/>
        }
        
      </section>
      <section id="tech_section" className="section_container">
        <h3>Technologies Used</h3>
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
