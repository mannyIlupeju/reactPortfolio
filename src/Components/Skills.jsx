import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {  useInView } from "react-intersection-observer";


function Skills({skills, text, setText}) {
  const { ref: myRef, inView: isVisible} = useInView()

   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);


    //using useEffect to do select a group of elements with the same class name and assigning it to allWithClass
    useEffect(()=>{
      const allWithClass = Array.from(document.querySelectorAll('div.group-text'));
      setText(allWithClass)
    },[])

    console.log(text)


  return (
    <section className='hero h-fit container-width mx-auto p-5 lg:mt-52 skillBg'>
      <div className=''>
        <div className='grid lg:grid-cols-2 gap-x-60'>
          <div className='col-span-1 w-1/ relative top-20'>
            <h1
              className='md:text-7xl lg:text-9xl text-3xl font-extrabold text-yellow-600'
              ref={myRef}
              data-aos='fade-left'
            >
              {isVisible ? (
                <div className='flex flex-row'>
                  <div className='group-text'>S</div>
                  <div className='group-text'>K</div>
                  <div className='group-text'>I</div>
                  <div className='group-text'>L</div>
                  <div className='group-text'>L</div>
                  <div className='group-text'>S</div>
                </div>
              ) : (
                "no"
              )}
            </h1>

            <div className='mt-5 leading-loose text-gray-400 text-sm md:text-lg md:w-1/2 lg:w-full lg:p-5'>
              <p>
                I create functional and aesthetic responsive websites that are
                fast, easy to use and built with best practices. My main area of
                expertise is front-end development.
              </p>
            </div>
          </div>

          <div className='lg:col-span-1 lg:col-start-2 md:w-full'>
            <div className='flex lg:flex-col flex-wrap lg:flex-nowrap flex-row gap-y-10 gap-x-5 lg:gap-x-20 relative right-1 h-fit md:p-8 mt-28 xl:mt-0 text-right'>
              {skills.map((skills) => {
                return (
                  <ul>
                    <li>
                      <div className='xl:text-6xl lg:text-4xl font-semibold'>
                        {skills}
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills