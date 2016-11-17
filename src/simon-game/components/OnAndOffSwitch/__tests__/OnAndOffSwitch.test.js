/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import OnAndOffSwitch from '..'

describe('<OnAndOffSwitch />', () => {
  it('should exist', () => {
    const wrapper = mount(<OnAndOffSwitch />)
    expect(wrapper.name()).toBe('OnAndOffSwitch')
  })
})
