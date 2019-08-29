import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  it('should update state with a new purchase when addPurchase iss called', () => {
    const wrapper = shallow(<App />)
    const mockPurchase = {name: 'iPhone Xs', description: 'The latest phone to come out by Apple. It has a faster processor and improved camera to take HDR images.', price: 900}
    const expected = [mockPurchase]

    expect(wrapper.state('data')).toEqual([])
    wrapper.instance().addPurchase(mockPurchase)
    expect(wrapper.state('data')).toEqual(expected)
  })
})
