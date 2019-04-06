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

test('it should match the snapshot', () => {
    const square = shallow(<Square/>);
    expect(square).toMatchSnapshot();
});

test('it should render a button with text X inside when passed as prop', () => {
    const square = shallow(<Square value={'X'}/>);
    expect(square.html()).toEqual("<button class=\"square\">X</button>");
});

test('it should call onClick prop function when clicked', () => {
    const mockOnClickFunction = jest.fn();
    const square = mount(<Square onClick={mockOnClickFunction} />);
    
    square.find('button').simulate('click');

    expect(mockOnClickFunction).toHaveBeenCalled();
});
