import React from 'react';

//components
import Nav from './components/Nav';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

//project images
import projectOne from './images/drawing4.svg';
import projectTwo from './images/drawing3.svg';
import projectThree from './images/drawing.svg';

import './App.css';

function App() {
  //projects
  const projectsData = [
    {
      id: 1,
      image: projectOne,
      description: 'This is description for project 1',
      hoverImage: 'actual project image one'
    },
    {
      id: 2,
      image: projectTwo,
      description: 'This is description for project 2',
      hoverImage: 'actual project image two'
    },
    {
      id: 3,
      image: projectThree,
      description: 'This is description for project 3',
      hoverImage: 'actual project image three'
    }
  ]

  return (
    <div className="App">
      <Nav/>
      <Landing/>
        {projectsData.map(item => (
         <Projects
          image={item.image}
          desc={item.description}
         /> 
        ))}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
