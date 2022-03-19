import React from 'react';
import Typical from 'react-typical';
import {useEffect, useState} from "react";

function Textline() {
  const [typing, setTyping] = useState(null);
      const steps = [
      ' Full Stack Developer 💻', 
      1000,
      ' Graphic Designer 🖌️', 
      1000,
      ' Problem Solver 🕵🏻‍♂️', 
      1000
    ];

  useEffect(()=>{
    const textLine = () => {setTyping(<div>
      <Typical
        steps={steps}
        loop={Infinity}
        wrapper="h4"
      />
    </div>)}
    textLine()
  },[])
    return (
      {typing}
    )
}

export default Textline