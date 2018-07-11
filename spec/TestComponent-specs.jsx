import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from '../src/components/test-component';

describe('Test component', () => {
  // tests
  const comp = shallow(<TestComponent />);

  it('renders', () => {
    console.log(comp.debug());
    expect(comp.name()).toBe('div');
  });
});
