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

{/*        {skills.map((skill, index) => (
          <li onClick={() => handleSkillSelect(skill)} key={index}>{skill}</li>
        ))}
          <li className='tag-filter' >   {selectedSkills.map((skill, index) => (<p key={index}> {skill}   </p>    ))} <span className='close-span'><FontAwesomeIcon icon={faSquareXmark} /></span></li>
     */}

      </ul>
      <p className="clear-tags" id="js-clear-tags" onClick={clearTags}>
        Clear
      </p>
      </div>

// addFlag && tagsAdded.append("<li class='tag-filter'><p>"+tag+"</p><span class='close-span'><i class='fas fa-times'></i></span></li>");
);
}; 

  


export default FilterTags;
