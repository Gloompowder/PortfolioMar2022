import React from 'react';
import Typical from 'react-typical';

function Textline() {
    const steps = [
      ' Full Stack Developer 💻', 
      1000,
      ' Graphic Designer 🖌️', 
      1000,
      ' Problem Solver 🕵🏻‍♂️', 
      1000
    ];
    return (
              <Typical
        steps={steps}
        loop={Infinity}
        wrapper="h4"
      />
    )
}

export default Textline