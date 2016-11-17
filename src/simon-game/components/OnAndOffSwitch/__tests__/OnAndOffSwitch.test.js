/* eslint-env jest */

import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import OnAndOffSwitch from '..'

describe('<OnAndOffSwitch />', () => {
  it('should exist', () => {
    const wrapper = mount(<OnAndOffSwitch />)
    expect(wrapper.name()).toBe('OnAndOffSwitch')
  })

  it('should display the words ON/OFF', () => {
    const wrapper = mount(<OnAndOffSwitch />)
    expect(wrapper.text().includes('ON/OFF')).toBe(true)
  })

  it('should call a function when clicked', () => {
    const sandbox = sinon.sandbox.create()
    const spy = sandbox.spy()
    const wrapper = mount(<OnAndOffSwitch func={spy} />)
    wrapper.simulate('click')
    wrapper.simulate('click')
    expect(spy.calledTwice).toBe(true)
    sandbox.restore()
  })
})
