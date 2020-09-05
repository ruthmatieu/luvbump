import React, { useState } from 'react';

function Landing() {
    const shortestIntro = 'Hi my name is Ruth. But I prefer Alanna.';
    const mediumIntro = `Hi my name is Ruth, But I prefer Alanna. I'm a web developer.`;
    const longIntro = `I am long intro`;
    const longestIntro = `I am longest intro`;

    const [intro, setIntro] = useState(shortestIntro); 
  return (
    <div className="intro-container">
        <div className="left-intro">
            <p>Ala<br/><span>nna</span></p>
        </div>
        <div className="right-intro">
            <p>Adjust bio length:</p>
            <button onClick={()=> setIntro(shortestIntro)}><span role="img">&#9899;</span></button>
            <button onClick={()=> setIntro(mediumIntro)}><span role="img">&#9899;</span></button>
            <button onClick={()=> setIntro(longIntro)}><span role="img">&#9899;</span></button>
            <button onClick={()=> setIntro(longestIntro)}><span role="img">&#9899;</span></button>
            <p>{intro}</p>
        </div>
    </div>
  );
}

export default Landing;