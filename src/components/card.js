import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";

const Card = ({ name, logo, title, postedDate, skills , handleSkillSelect} ) => {
  const [day, job_type, location] = postedDate.split(", ");

  return (
    <li className="job-card new featured d-flex">
      <div className="job-card__info">
        <div className="d-md-flex align-items-center">
          <div className="img-c">
            <img className="img-fluid" src={logo} />
          </div>
          <div>
            <div className="d-flex align-items-center">
              <p>{name}</p>
              <p className="tag-new">New!</p>
              <p className="tag-featured">Featured</p>
            </div>
            <a href="">
              <h6>{title}</h6>
            </a>
            <ul>
              <li>{day}</li>
              <li>{job_type}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="job-card__tags d-flex">
        {skills.map((skill, index) => (
          <li onClick={() => handleSkillSelect(skill)} key={index}>{skill}</li>
        ))}
      </ul>
    </li>
  );
};

export default Card;