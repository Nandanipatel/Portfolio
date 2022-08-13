import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiHtml5 , SiCss3, SiJavascript,SiReact,SiBootstrap,SiMysql,SiPython,SiPhp} from "react-icons/si";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Skills</h3>
          <div className="experience_content">
            <div className="experience_details">
              <SiHtml5 className="experience_details-icon" />
              <div className="icon-data"><h4>HTML</h4></div>
            </div>

            <div className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <div className="icon-data">
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

            <div className="experience_details">
              <SiJavascript className="experience_details-icon" />
              <div className="icon-data">
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

            <div className="experience_details">
              <SiReact className="experience_details-icon" />
              <div className="icon-data">
                <h4>ReactJS</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

            <div className="experience_details">
              <SiBootstrap className="experience_details-icon" />
              <div className="icon-data">
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>
            <div className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div className="icon-data">
                <h4>MySQL</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

            <div className="experience_details">
              <SiPhp className="experience_details-icon" />
              <div className="icon-data">
                <h4>PHP</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

            <div className="experience_details">
              <SiPython className="experience_details-icon" />
              <div className="icon-data">
                <h4>Python</h4>
                {/* <small className="text-light">Experienced </small> */}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};
export default Experience;
