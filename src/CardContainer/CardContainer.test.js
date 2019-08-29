import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer.js'

describe('CardContainer', () => {
  
  it('should match the snapshot', () => {
    const mockPurchases = [
      {
      description: 'The latest phone to come out by Apple. It has a faster processor and improved camera to take HDR images.',
      id: 1, 
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154',
      key: 1,
      name: 'iPhone Xs',
      price: 900
      }
    ]
    const wrapper = shallow(<CardContainer data={mockPurchases}/>)

    expect(wrapper).toMatchSnapshot();
  });
})
