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

test('it should render without crashing when props are passed in', () => {
    const square = shallow(<Square value={1}/>);
    expect(square).toHaveLength(1);
});

test('it should should match the snapshot', () => {
    const square = shallow(<Square value={1}/>);
    expect(square).toMatchSnapshot();
});

test('it should render a button with text 1 inside', () => {
    const square = shallow(<Square value={1}/>);
    expect(square.html()).toEqual("<button class=\"square\">1</button>");
});
