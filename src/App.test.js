/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('should contain a SimonGame component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('SimonGame').length).toBe(1)
})
