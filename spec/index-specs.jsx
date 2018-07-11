import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app';

describe('test', () => {

  // tests
  const comp = shallow(<App />);
  it('renders', () => {
    console.log(comp.debug());
    expect(comp.prop('className')).toBe('example');
  });
});
