/* eslint-disable no-undef,no-unused-expressions */

import { mount } from 'vue-test-utils'
import Icon from '../index'

let options = {
  propsData: {
    mode: 'ios',
    color: 'danger',
    name: 'star',
    activeName: 'star-outline',
    isActive: true,
    ios: 'ios-star',
    md: 'md-star'
  }
}

describe('Icon', function () {
  it('@base: renders the correct markup', function () {
    let wrapper = mount(Icon, options)
    const result = `<i class="ion-icon icon-ios-danger ion-ios-star"></i>`
    expect(wrapper.html()).toEqual(result)
  })

  it('@base: component must have a name', function () {
    let wrapper = mount(Icon, options)
    expect(wrapper.name()).toEqual('Icon')
  })

  it('@base: have the right className', function () {
    let wrapper = mount(Icon, options)
    expect(wrapper.hasClass('ion-icon')).toBeTruthy()
  })
})
