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

test('it should update internal state when a square is clicked', () => {
    const board = mount(<Board/>);
    const firstSquare = board.find(Square).first();
    expect(board.state('squares')).toEqual(Array(9).fill(null));
   
    firstSquare.find('button').simulate('click');

    expect(board.state('squares')).toEqual(['X', ...Array(8).fill(null)]);
});

test('it should update the sqaure clicked with an X', () => {
    const board = mount(<Board/>);
    const firstSquare = board.find(Square).first();
    expect(firstSquare.html()).toEqual('<button class=\"square\"></button>');

    firstSquare.find('button').simulate('click');

    expect(firstSquare.html()).toEqual('<button class=\"square\">X</button>');
});