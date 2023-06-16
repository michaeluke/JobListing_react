import React from "react";
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const FilterTags = ({ selectedSkills, clearTags , handleRemoveSkill}) => {

  return (
    <div  className="filter-tags-c ">
      <ul id="filter-tags-list">
        {selectedSkills.map((skill, index) => (
          <li className='tag-filter'  key={index}> <p> {skill}   </p> <span className='close-span'  onClick={() => handleRemoveSkill(skill)}><FontAwesomeIcon icon={faSquareXmark} /></span></li>
        ))}


      </ul>
      <p className="clear-tags" id="js-clear-tags" onClick={clearTags}>
        Clear
      </p>
      </div>

);
}; 

  


export default FilterTags;
