/* eslint-env jest */

import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import OnAndOffSwitch from '..'

let sandbox
beforeEach(() => {
  sandbox = sinon.sandbox.create()
})

afterEach(() => {
  sandbox.restore()
})

describe('<OnAndOffSwitch />', () => {
  it('should exist', () => {
    const wrapper = mount(<OnAndOffSwitch />)
    expect(wrapper.name()).toBe('OnAndOffSwitch')
  })

  it('should display the words ON/OFF', () => {
    const wrapper = mount(<OnAndOffSwitch />)
    expect(wrapper.text().includes('ON/OFF')).toBe(true)
  })

  it('must receive a clickHandler function as props', () => {
    const stub = sandbox.stub(console, 'error')
    function foo () {}
    let wrapper = shallow(<OnAndOffSwitch />)
    wrapper = shallow(<OnAndOffSwitch clickHandler={foo} />)
    expect(stub.calledOnce).toBe(true)
  })

  it('should call a function when clicked', () => {
    const spy = sandbox.spy()
    const wrapper = mount(<OnAndOffSwitch func={spy} />)
    wrapper.simulate('click')
    wrapper.simulate('click')
    expect(spy.calledTwice).toBe(true)
  })
})
