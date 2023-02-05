import React from 'react'
import {motion} from 'framer-motion'

const contactVariants = {
  hidden: {
    y: "5vw",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
      stiffness: 40,
    }
  }
}


function Contact() {
  return (
    <section className='flex justify-center container-width mx-auto h-fit bg-zinc-800 lg:mt-42 p-20 '>
      <motion.div
        className='mt-10'
        variants={contactVariants}
        initial={"hidden"}
        whileInView={"visible"}
      >
        <h1 className='md:text-7xl lg:text-9xl text-3xl text-center font-semibold text-yellow-600 bg-zinc-900 rounded-2xl p-5'>
          Get In Touch
        </h1>
        <div className='text-center text-gray-400 mt-8'>
          <p className='text-xl'>
            I'm currently available to work, Please don't hesitate to connect
            with me
          </p>
        </div>
        <div className='text-center mt-8'>
          <a href='mailto:mannybiz@outlook.com' target='_blank'>
            <button className='btn btn-success'>Contact Me &#9995;</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact