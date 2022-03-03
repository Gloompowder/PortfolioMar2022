import React from 'react';
import Typical from 'react-typical';

class Textline extends React.Component {
  render () {
    const steps = [
      'Full Stack Developer', 1000,
      'Graphic Designer', 1000
    ];
    return (
              <Typical
        steps={steps}
        loop={Infinity}
        wrapper="h4"
      />
    )
  }
}

export default Textline