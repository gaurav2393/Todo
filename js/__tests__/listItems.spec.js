import React from 'react';
import renderer from 'react-test-renderer';
import ListItems from '../listItems';

// test('List Items renders', ()=> {
//     const component = renderer.create(<ListItems />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })

describe('App', () => {
    it('should be able to run tests', () => {
        expect(1 + 2).toEqual(3);
    });
});