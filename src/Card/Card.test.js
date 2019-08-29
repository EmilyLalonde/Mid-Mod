import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card.js'

describe('Card', () => {
  it('renders the name of the purchase in <h2> tags', () => {
    const wrapper = shallow(<Card name="iPhone Xs" />);
    const name = <h2>iPhone Xs</h2>;

    expect(wrapper.contains(name)).toEqual(true);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card 
      img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154"
      name='iPhone Xs' 
      price = {900}
      description='The latest phone to come out by Apple. It has a faster processor and improved camera to take HDR images.' 
      id={1} 
       />)

    expect(wrapper).toMatchSnapshot();
  });
});