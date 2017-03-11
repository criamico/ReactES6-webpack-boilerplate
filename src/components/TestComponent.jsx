import React from 'react';
import imgSrc from '../assets/images/react-logo.png';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={imgSrc} alt="react logo"/>
      </div>
    );
  }
}

export default TestComponent;
