import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import {MdLocationOn} from "react-icons/md";

const Education = () => {
  return (
    <section id="education">
      <h5> About my</h5>
      <h2>Education</h2>
      <div className="container education_container">
        <article className="education">
          <div className="education_head">
            <h3>L.D College of Engineering</h3>
          </div>
          <ul className="education_data">
            <li>
              <MdSchool className="education-icon" />
              <p>Bachelor degree in Information Technology</p>
            </li>
            <li>
              <MdLocationOn className="education-icon" />
              <p>Ahmedabad - India</p>
            </li>
          </ul>
        </article>


        <article className="education">
          <div className="education_head">
            <h3>Government Polytechnic Ahmedabad</h3>
          </div>
          <ul className="education_data">
            <li>
              <MdSchool className="education-icon" />
              <p>Diploma in Information Technology</p>
            </li>
            <li>
              <MdLocationOn className="education-icon" />
              <p>Ahmedabad - India</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Education;
