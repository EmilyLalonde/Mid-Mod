// import React from 'react'
// import { shallow } from 'enzyme'
// import AppForm from './AppForm.js'

// describe('AppForm', () => {
//   it('should update state when handlePurchaseChange is called', () => {
//     const wrapper = shallow (<AppForm addPurchase={jest.fn()}/>)
//     const mockEvent = { target: { image: 'blah', name: 'iPhone1000', description: 'Cool af', price: 1000000000000} };
//     const expected = 1000000000000;

//     wrapper.instance().handlePurchaseChange(mockEvent);

//     expect(wrapper.state('price')).toEqual(expected);
//   });
// });