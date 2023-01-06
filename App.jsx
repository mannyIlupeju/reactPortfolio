import { useState } from 'react'
import './index.css'

import Landing from './Components/Landing'
import Date from './SharedComponents/Date'
import Navbar from './Components/Navbar'
import Cursor from './SharedComponents/Cursor'
import Skills from './Components/Skills'

function App() {
   const navLinks = [
     {
       title: "Manny Ilupeju",
       date: <Date/>,
       contact: "Contact Me",
     },
   ];

   const [text, setText] = useState([]);


  return (
    <>
      <div className='flex flex-col bg-zinc-300 h-screen container-width'>
        <Cursor nav={navLinks} text={text} />
        <Navbar nav={navLinks} />

        <main>
          <Landing text={text} setText={setText} />
          <Skills />
        </main>
      </div>
    </>
  );
}

export default App
