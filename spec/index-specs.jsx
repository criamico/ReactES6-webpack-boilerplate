import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import App from '../src/app';

describe('test', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  // tests
  const comp = shallow(<App />);
  it('renders', () => {
    console.log(comp.debug());
    expect(comp.prop('className')).toBe('example');
  });
});
