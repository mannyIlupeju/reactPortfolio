import { useState, useEffect } from 'react'
import './index.css'
import Landing from './Components/Landing'
import Date from './SharedComponents/Date'
import Navbar from './Components/Navbar'
import Cursor from './SharedComponents/Cursor'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Preloader from './Components/Preloader'

function App() {
  const skillSet = [
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "REACT",
    "FIGMA",
    "PHOTOSHOP",
  ];
   const navLinks = [
     {
       title: "Manny Ilupeju",
       date: <Date/>,
       contact: "Contact Me",
     },
   ];

   console.log(navLinks.date)

   //state management for the frontend developer text 
   const [text, setText] = useState([]);

   //loading state
   const [loading, setLoading] = useState(false)

  //load screen once after render
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])


  return (
    <>
    {
      loading ?
      <Preloader/>
      :
      <div className='bg-zinc-800 flex flex-col container-width h-fit mx-auto '>
        <Cursor nav={navLinks} text={text} skills={skillSet} />
        <Navbar nav={navLinks} />
        <Landing text={text} setText={setText} />
        <Skills skills={skillSet} text={text} setText={setText} />
        <Projects text={text} setText={setText} />
        <Contact/>
      
      </div>
    }
    </>
  );
}

export default App
