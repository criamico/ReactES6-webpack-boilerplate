import React from 'react';
import imgSrc from '../assets/images/react-logo.png';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    TestComponent.displayName = 'TestComponent';
  }

  render() {
    return (
      <React.Fragment>
        <img src={imgSrc} alt="react logo" />
      </React.Fragment>
    );
  }
}

export default TestComponent;
