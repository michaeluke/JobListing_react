import './App.css';
import React, { useState } from 'react';
import Card from './card';
import data from './data.json'
import FilterTags from './FilterTags';
export default function Home() {
    const [selectedSkills, setSelectedSkills] = useState([]);

   
  const handleSkillSelect = (skill) => {

    //if skill has been already selected and user presses on it again it's removed from the filtered skills.
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
    } else {
     //add skill if selectedskills array doesnt have it.
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    debugger
    setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
  };

  const clearTags = () => {
    setSelectedSkills([]);
    debugger
  };

  //variable that contains only filtered cards.
  const filteredCards = selectedSkills.length > 0
    ? data.cards.filter((card) => selectedSkills.every((skill) => card.skills.includes(skill)))
    : data.cards;
  
    return(
        <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            
              {/* <ul id="filter-tags-list"></ul> */}
              <FilterTags selectedSkills={selectedSkills} clearTags={clearTags} handleRemoveSkill={handleRemoveSkill} />
             
          
          </div>
        </div>
        <div className="row">
          <ul className="col-12" id="job-list">

          {filteredCards.map((card, index) => (
        <Card key={index} {...card}
        handleSkillSelect={handleSkillSelect}
        />
      ))}
          </ul>
        </div>
        </div>




    )

}
