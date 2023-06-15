import React from "react";
import "./About.css";
// import ME from '../../assets/vector-user.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/809/408/non_2x/the-girl-works-at-a-laptop-flat-style-good-for-image-work-office-hiring-staff-illustration-vector.jpg"
              alt="About Image"
            />
            {/* <img src={ME} alt="image"></img> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Year and Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>in progresss</small>
            </article>
          </div>

          <p>
            Neophyte, Currently improving skills.... <br />
            Sometimes I give my time to Calligraphy, Reading and Sketching.
            <br />
            Pursuing Bachelor of engineering in Information Technology From LD
            college of Engineering.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
