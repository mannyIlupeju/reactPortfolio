import React from "react";
import { useEffect, useState, useRef } from "react";

//TODO 
//Scale each letter on hover 


function Cursor({ text }) {

  const [color, setColor] = useState({});
  const cursorElement = useRef();


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
  useEffect(()=> {
    text.forEach((letters) => {
    letters.addEventListener("mouseover", () => {
    //setting up the cursor look when it hovers over the letters
    cursorElement.current.style.background = "black";
    cursorElement.current.style.transform = "scale(2)";

    //toggling color when it is hovered
    setColor(!color);

    if (!color) {
     letters.style.color = "red";
     console.log(letters.style.transform);
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
    }
    });
    });


  })
 

    // text.forEach((letters)=> {
    //     letters.addEventListener("mouseover", () => {
    //       //setting up the cursor look when it hovers over the letters
    //       cursorElement.current.style.background = 'black';
    //       cursorElement.current.style.transform = "scale(2)"
    



    //       //toggling color when it is hovered
    //       setColor(!color);

    
    //       if (!color) {
    //         letters.style.color = "red";
    //         letters.style.transform = "translateY(2px)";
    //         console.log(letters)
    //       }
    //     });

    //     letters.addEventListener("mouseleave", ()=>{
    //       //setting up the cursor look when it hovers over the letters
    //       cursorElement.current.style.background = null;
    //       cursorElement.current.style.transform = null;

    //       //toggling color when it is hovered
    //       setColor(color);
    //       if (color) {
    //         letters.style.color = null;
    //       }
    //     })
    // })
    
  
 





  return (
    <>
      <div className='cursor' ref={cursorElement}></div>
    </>
  );
}

export default Cursor;
