import React from "react";
import { useEffect, useState, useRef } from "react";

//TODO 
//Scale each letter on hover 


function Cursor({ text, skills}) {

  const [color, setColor] = useState({});
  const cursorElement = useRef();

  console.log(skills)

  //setting the cursor movement by accessing the dom through useEffect
  useEffect(() => {
    document.addEventListener("mousemove", cursorDetails);
  });

  //function that assigns the cursors' X and Y position on the window to our custom cursor. 
  const cursorDetails = (e) => {
    cursorElement.current.style.top = e.pageY + "px";
    cursorElement.current.style.left = e.pageX + "px";
  };


    //programming the cursor to the letters array so it can hover and scale its size.
    //Herotext cursor effect
    useEffect(()=> {
    text.forEach((letters) => {
    letters.addEventListener("mouseover", () => {
    //setting up the cursor look when it hovers over the letters
    cursorElement.current.style.background = "black";
    cursorElement.current.style.transform = "scale(2)";

    //toggling color when it is hovered
    setColor(!color);

    if (!color) {
     letters.style.color = "#cc2c2ccc";
     letters.style.transform ="scale(1)"
     letters.style.transform="translateY(-30px)";
    }
    });

    letters.addEventListener("mouseleave", () => {
     //setting up the cursor look when it hovers over the letters
    cursorElement.current.style.background = null;
    cursorElement.current.style.transform = null;

    //toggling color when it is hovered
    setColor(color);
     if (color) {
      letters.style.color = null;
      letters.style.transform = null;
    }
    });
    });


    
    


  })
 
  
 //Hovering over the skills 
 useEffect(()=> {

  })




  return (
    <>
      <div className='cursor' ref={cursorElement}></div>
    </>
  );
}

export default Cursor;
