import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import Square from './Square.Component'

configure({ adapter: new Adapter() });

test('it should render without crashing', () => {
    const square = shallow(<Square/>);
    expect(square).toHaveLength(1);
});

test('it should match the snapshot', () => {
    const square = shallow(<Square/>);
    expect(square).toMatchSnapshot();
});

test('it should have an X when clicked', () => {
    const square = mount(<Square />);
    
    expect(square.state('value')).toEqual(null);
    expect(square.html()).toEqual("<button class=\"square\"></button>");

    square.find('button').simulate('click');

    expect(square.state('value')).toEqual('X');
    expect(square.html()).toEqual('<button class=\"square\">X</button>');
});
