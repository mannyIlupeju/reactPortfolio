import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Landing({text, setText}) {
  //hover state controls in the page.
  const [hover, setHover] = useState(false)

  //setting the useView to set the ref and the inView variables. 
  const { ref: myRef, inView: isVisible } = useInView();

  //using useEffect to do select a group of elements with the same class name and assigning it to allWithClass
  useEffect(()=>{
    const allWithClass = Array.from(document.querySelectorAll('div.group-text'));
    setText(allWithClass)
  },[])


  //using the useEffect to initialize the animate on scroll function, added the duration value to set the controls. 
  useEffect(()=> {
    Aos.init({duration:2000});
  },[]);




  
  


  return (
    <section className='hero flex justify-center flex-col p-5 container-width mx-auto h-max topBg'>
      <div className='container pt-20' ref={myRef}>
        {/* setting the animation for when the page is out of view and when it returns to view using the useView hook  */}

        <div>
          <div data-aos='fade-right' data-aos-easing='ease-in'>
            <div className='text-gray-400 font-semibold mb-10'>
              <span>Hi, I am a</span>
            </div>

            <div className=''>
              <h1 className='flex flex-wrap text-yellow-600'>
                <div className='hero-Title flex'>
                  <div className='group-text'>F</div>
                  <div className='group-text'>R</div>
                  <div className='group-text'>O</div>
                  <div className='group-text'>N</div>
                  <div className='group-text'>T</div>
                </div>

                <div className='hero-Dash flex'>
                  <div className='group-text'>-</div>
                </div>

                <div className='hero-Title_End flex'>
                  <div className='group-text'>E</div>
                  <div className='group-text'>N</div>
                  <div className='group-text'>D</div>
                </div>

                <div className='hero-Title_Web flex'>
                  <div className='group-text'>W</div>
                  <div className='group-text'>E</div>
                  <div className='group-text'>B</div>
                </div>

                <div className='hero_Title_Dev flex-wrap flex text-sm'>
                  <div className='group-text'>D</div>
                  <div className='group-text'>E</div>
                  <div className='group-text'>V</div>
                  <div className='group-text'>E</div>
                  <div className='group-text'>L</div>
                  <div className='group-text'>O</div>
                  <div className='group-text'>P</div>
                  <div className='group-text'>E</div>
                  <div className='group-text'>R</div>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div
          className='w-1/5 float-right'
          onMouseEnter={() => {
            setHover(!hover);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {isVisible ? (
            <div data-aos='fade-left'>
              {hover ? (
                <div className='group-text glassCard rounded-l-lg p-4 relative top-16 lg:right-full aboutPosition overflow-x-hidden'>
                  <div className=' text-red-200 mb-3'>
                    <h3 className='text-xl font-semibold'>About</h3>
                  </div>
                  <p className='text-gray-400 text-sm md:text-lg font-light w-96'>
                    I am a curious designer and developer focused on creating
                    interactive digital experiences that are aesthetically
                    pleasing and functional on the web .
                  </p>
                </div>
              ) : (
                <div className='rounded-l-lg p-4 w-fit relative top-16 lg:right-full aboutPosition'>
                  <div className=' text-gray-200 mb-3'>
                    <h3 className='text-xl font-semibold'>About</h3>
                  </div>
                  <p className='text-sm md:text-lg text-gray-400 font-light w-96'>
                    I am a curious designer and developer focused on creating
                    interactive digital experiences that are aesthetically
                    pleasing and functional on the web .
                  </p>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default Landing