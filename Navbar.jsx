import React from 'react'
import Date from '../SharedComponents/Date'
import {useState} from 'react'

function Navbar({nav}) {
  const [hover, setHover] = useState(false)

  return (
    <>
      <header>
        <nav className='flex flex-row justify-between p-5'>
          {nav.map((navLink)=>{
            const {title, date, contact} = navLink
            return (
              <>
                <div className='w-20 text-zinc-800 font-bold hover:text-red-700'>
                  <h2>{title}</h2>
                </div>
                <div className='text-zinc-800'>
                  {date}
                 </div>
                <div onMouseEnter={()=> {
                  setHover(!hover)
                }}
                  onMouseLeave={()=>{
                    setHover(false)
                  }}
                >
                  {!hover ? 
                  (<button className='btn glass text-zinc-600'>{contact}</button>) : 
                  (<button className='btn text-zinc-200' onClick={()=>{
                    console.log('clicked')
                  }}>{contact}</button>)
                  
                }
                </div>
              </>
            )
          })}
          

        </nav>
      </header>
    </>
  )
}

export default Navbar