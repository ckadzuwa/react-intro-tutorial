import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Square from './Square.Component'

configure({ adapter: new Adapter() });

test('it should render without crashing', () => {
    const square = shallow(<Square/>);
    expect(square).toHaveLength(1);
});