import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import Board from './Board.Component'
import Square from './Square.Component'

configure({ adapter: new Adapter() });

test('it should render without crashing', () => {
    const board = shallow(<Board/>);
    expect(board).toHaveLength(1);
});

test('it should match the snapshot', () => {
    const board = shallow(<Board/>);
    expect(board).toMatchSnapshot();
});

test('it should 3x3 grid giving a total of nine squares', () => {
    const board = shallow(<Board/>);
    expect(board.find('.board-row')).toHaveLength(3);
    expect(board.find(Square)).toHaveLength(9);
});