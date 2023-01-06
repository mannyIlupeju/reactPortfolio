import React from 'react'
import Date from '../SharedComponents/Date'
import {useState, useEffect, useRef} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";



function Navbar({nav}) {
  const [hover, setHover] = useState(false)

  const { ref: navRef, inView: isVisible } = useInView();

  
  // initializing the AOS 
  useEffect(() => {
     Aos.init({ duration: 500 });
  }, []);

 

  return (
    <>
      <header ref={navRef}>
        {isVisible ? (
          <div data-aos='fade-down'>
            <nav className=' flex flex-row justify-between p-5 bg-zinc-900'>
              {nav.map((navLink) => {
                const { title, date, contact } = navLink;
                return (
                  <>
                    <div className='text-gray-400 font-semibold text-sm lg:text-2xl'>
                      {date}
                    </div>

                
                      <div className=' text-gray-400 font-semibold text-2xl hover:text-red-700'>
                        <h2>{title}</h2>
                      </div>

                      <div
                        onMouseEnter={() => {
                          setHover(!hover);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
                        }}
                      >
                        {!hover ? (
                          <a href='mailto:mannybiz@outlook.com' target='_blank'>
                            <button className='btn glass text-zinc-800'>
                              {contact}
                            </button>
                          </a>
                        ) : (
                          <a href='mailto:mannybiz@outlook.com' target='_blank'>
                            <button
                              className='btn text-zinc-200'
                              onClick={() => {
                                console.log("clicked");
                              }}
                            >
                              {contact}
                            </button>
                          </a>
                        )}
                      </div>
                 
                  </>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

export default Navbar