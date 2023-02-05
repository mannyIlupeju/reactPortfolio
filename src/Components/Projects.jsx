import React, {useState, useEffect} from 'react'
import { FaGithub, FaFolderOpen } from "react-icons/fa";

const Projects = ({text, setText}) => {


  //using useEffect to do select a group of elements with the same class name and assigning it to allWithClass
  useEffect(() => {
    const allWithClass = Array.from(
      document.querySelectorAll("div.group-text")
    );
    setText(allWithClass);
  }, []);



  return (
    <>
      <section className='flex flex-col justify-center h-fit p-20 lg:mt-52 projectBg container-width mx-auto'>
        <div className='md:text-7xl lg:text-9xl text-3xl font-bold text-yellow-600'>
          <div className='flex justify-center  flex-row'>
            <div className='group-text'>P</div>
            <div className='group-text'>R</div>
            <div className='group-text'>O</div>
            <div className='group-text'>J</div>
            <div className='group-text'>E</div>
            <div className='group-text'>C</div>
            <div className='group-text'>T</div>
            <div className='group-text'>S</div>
          </div>
        </div>
        <div className='text-center text-gray-400 text text-xl mt-8'>
          <p>
            Here are some personal projects that i have worked on over the year
          </p>
        </div>

        <div className='flex justify-center flex-wrap flex-row gap-y-20 gap-x-20 mt-14'>
          <div className='bg-white w-fit rounded-lg p-5 projectCard'>
            <div className='flex flex-row justify-between gap-x-20'>
              <h3 className='text-white'>Urban-EStore</h3>
              <div className='justify-end'>
                <div className='flex flex-row gap-x-5'>
                  <div>
                    <a
                      href='https://github.com/mannyIlupeju/shop_project'
                      target='_blank'
                    >
                      <FaGithub size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                  <div>
                    <a href='https://urbanecommerce.netlify.app/' target='_blank'>
                    <FaFolderOpen size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full mt-10'>
              <figure>
                <p className='text-white'>
                  Responsive and functional ecommerce site built with React.
                  <br></br>My goal was to recreate the front-end website for a
                  urban store. <br></br>
                  <br></br>
                  The project features a landing page, a shop section <br></br>
                  with two working product pages, contact page and Cart.
                </p>
              </figure>
              <div className='mt-6 flex justify-center'>
                <img src='/images/urban-store.png' className='imgBox'></img>
              </div>
            </div>
          </div>

          <div className='bg-white w-fit rounded-lg p-5 projectCard'>
            <div className='flex flex-row justify-between '>
              <h3 className='text-white'>Weather App</h3>
              <div className='justify-end'>
                <div className='flex flex-row gap-x-5'>
                  <div>
                    <a
                      href='https://www.github.com/mannyIlupeju/WeatherReact'
                      target='_blank'
                    >
                      <FaGithub size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                  <div>
                    <a href= 'https://weatherreactm.netlify.app/' target='_blank'>
                    <FaFolderOpen size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full mt-10'>
              <p className='text-white'>
                In this project, i built a responsive weather app using React{" "}
                <br></br>and consuming APIs from weatherbit.io .<br></br>
                <br></br>
                It was exciting to create this as i was able to create a{" "}
                <br></br> weather dashboard featuring cool animations and data{" "}
                <br></br>
                from the weatherbit API.
              </p>
              <div className='mt-6 flex justify-center'>
                <img
                  src='/images/weather-app.png'
                  alt='weather-app'
                  className='imgBox'
                ></img>
              </div>
            </div>
          </div>

          <div className='bg-white w-fit h-fit rounded-lg p-5 projectCard'>
            <div className='flex flex-row justify-between '>
              <h3 className='text-white'>Omnifood App</h3>
              <div className='justify-end'>
                <div className='flex flex-row gap-x-5'>
                  <div>
                    <a
                      href='https://github.com/mannyIlupeju/Omnifooddeli'
                      target='_blank'
                    >
                      <FaGithub size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                  <div>
                    <a href='https://whimsical-crepe-341e77.netlify.app/'target='_blank'>
                    <FaFolderOpen size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full mt-10'>
              <p className='text-white'>
                Built an landing page for a food delivery company with HTML and CSS
                <br></br>that allows users to view products, price and product information
                <br/>
              </p>
              <div className='mt-8 flex justify-center'>
                <img
                  src='/images/OmnifoodApp.png'
                  alt='Omnifood-app'
                  className='imgBox'
                ></img>
              </div>
            </div>
          </div>

          <div className='bg-white w-fit rounded-lg p-8 projectCard'>
            <div className='flex flex-row justify-between '>
              <h3 className='text-white'>Simon Game built with JQuery</h3>
              <div className='justify-end'>
                <div className='flex flex-row gap-x-5'>
                  <div>
                    <a
                      href='https://github.com/mannyIlupeju/SimonGame'
                      target='_blank'
                    >
                      <FaGithub size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                  <div>
                    <a href='https://simon-gamev999.netlify.app/' target="_blank">
                    <FaFolderOpen size={30} className='cursor-pointer text-gray-400 hover:text-green-500' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full mt-10'>
              <p className='text-white'>
                Simon Game built with HTML, CSS and JQuery
              </p>
              <div className='mt-10'>
                <img
                  src='/images/SimonGame.png'
                  alt='weather-app'
                  className='imgBox'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects