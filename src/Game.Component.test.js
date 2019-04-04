import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Game from './Game.Component'

configure({ adapter: new Adapter() });

test('it should render without crashing', () => {
    const game = shallow(<Game/>);
    expect(game).toHaveLength(1);
});

test('it should match the snapshots', () => {
    const game = shallow(<Game/>);
    expect(game).toMatchSnapshot();
});