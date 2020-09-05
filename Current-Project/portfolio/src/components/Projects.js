import React, { useState } from 'react';

function Projects(props) {

  const [info, setInfo] = useState();

  return (
    <div className="projects-container">
      <img src={props.image} onClick={()=>{setInfo()}}/>
    </div>
  );
}

export default Projects;
