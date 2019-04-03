import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Board from './Board.Component'

configure({ adapter: new Adapter() });

test('it should render without crashing', () => {
    const board = shallow(<Board/>);
    expect(board).toHaveLength(1);
});