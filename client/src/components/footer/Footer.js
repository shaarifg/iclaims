import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="name">
        <h2>I am Mohd Sharif</h2>
        <h6 style={{textAlign:"center"}}>Develpoer of This WebApp</h6>
      </div>
      <div className="profile_wrapper">
        <div className="about_me">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            quisquam consequatur iste, neque tempore ab itaque, dolores rerum
            tempora deserunt sed! Provident voluptatem sed saepe a tempora
            necessitatibus, inventore voluptate?
          </p>
        </div>
        <div className="connect_me">
          <h3>Connect With Me</h3>
          <ul>
            <li >
              <a href="" className="list_item">
                <LanguageIcon /> Portfolio
              </a>
            </li>
            <li >
              <a href="" className="list_item">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
            <li >
              <a href="" className="list_item">
                <GitHubIcon /> Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">&copy; Copyright 2022, All rights are reserved | Mohd Sharif</div>
    </footer>
  );
};

export default Footer;
