/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import SimonGame from '..'

describe('<SimonGame />', () => {
  it('should exist', () => {
    const wrapper = mount(<SimonGame />)
    expect(wrapper.name()).toBe('SimonGame')
  })

  it('should have an on and off switch', () => {
    const wrapper = shallow(<SimonGame />)
    expect(wrapper.find('OnAndOffSwitch').length).toBe(1)
  })
})
