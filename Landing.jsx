import React, { useState, useEffect } from 'react'
import ScrollAnimation from "react-animate-on-scroll";

function Landing({text, setText}) {
  const [hover, setHover] = useState(false)
//using useEffect to do select a group of elements with the same class name and assigning it to allWithClass
 useEffect(()=>{
   const allWithClass = Array.from(document.querySelectorAll('span.group-text'));
   setText(allWithClass)
 },[])
  


  return (
    <section className='hero flex flex-col p-5 container-width w-screen overflow-x-hidden'>
      <div className='container pt-20'>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='text-zinc-800 font-semibold mb-10'>
            <span>Hi, I am a</span>
          </div>

          <div className=''>
            <h1 className='flex flex-wrap font-extrabold text-9xl'>
              <div className='hero-Title'>
                <span className='group-text'>F</span>
                <span className='group-text'>R</span>
                <span className='group-text'>O</span>
                <span className='group-text'>N</span>
                <span className='group-text'>T</span>
              </div>

              <div className='hero-Dash'>
                <span className='group-text'>-</span>
              </div>

              <div className='hero-Title_End'>
                <span className='group-text'>E</span>
                <span className='group-text'>N</span>
                <span className='group-text'>D</span>
              </div>

              <div className='hero-Title_Web'>
                <span className='group-text'>W</span>
                <span className='group-text'>E</span>
                <span className='group-text'>B</span>
              </div>

              <div className='hero_Title_Dev'>
                <span className='group-text'>D</span>
                <span className='group-text'>E</span>
                <span className='group-text'>V</span>
                <span className='group-text'>E</span>
                <span className='group-text'>L</span>
                <span className='group-text'>O</span>
                <span className='group-text'>P</span>
                <span className='group-text'>E</span>
                <span className='group-text'>R</span>
              </div>
            </h1>
          </div>
          </ScrollAnimation>

          <div
            className='w-1/5 float-right'
            onMouseEnter={() => {
              setHover(!hover);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            {hover ? (
              <div className='glassCard rounded-l-lg p-5 translate-y-2px'>
                <div className=' text-red-700 mb-3'>
                  <h3>About</h3>
                </div>
                <p className='text-white text-sm font-light'>
                  I am a curious designer and developer focused on creating
                  interactive digital experiences that are aesthetically
                  pleasing and functional on the web .
                </p>
              </div>
            ) : (
              <div className='rounded-l-lg p-5'>
                <div className=' text-zinc-800 mb-3'>
                  <h3>About</h3>
                </div>
                <p className='text-sm text-zinc-800 font-light'>
                  I am a curious designer and developer focused on creating
                  interactive digital experiences that are aesthetically
                  pleasing and functional on the web .
                </p>
              </div>
            )}
          </div>
      </div>
    </section>
  );
}

export default Landing