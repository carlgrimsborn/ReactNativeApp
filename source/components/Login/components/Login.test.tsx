
/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../../Progress';
import { TextInput } from 'react-native';

import { Login } from './index';

jest.unmock('react-native');

function setup() {
  const props = {
// Här kan ni mocka komponentens props om sådana finns
// typ userName: 'test'
  };

  const enzymeWrapper = shallow(<Login {...props} /> );

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  /**
   * Test component rendering. Properties of children might be tested by importing their type:
   *   import { Text } from 'react-native';
   *    const busyProps = enzymeWrapper.find(Text).props();
   *    expect(busyProps.text).toBe('test);
   */
  describe('Login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
      const textOutput1 = enzymeWrapper.find(TextInput).at(0).props();
      expect(textOutput1.placeholder).toBe('Username');

      const textOutput2 = enzymeWrapper.find(TextInput).at(1).props();
      expect(textOutput2.placeholder).toBe('Password');

    });
  });
});