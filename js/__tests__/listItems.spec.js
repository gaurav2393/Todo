import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ListItems from '../listItems';

// test('List Items renders', ()=> {
//     const component = renderer.create(<ListItems />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })

// test('List Items renders', ()=> {
//     const component = shallow(<ListItems />);
//     expect(component).toMatchSnapshot();
// })

describe('App', () => {
    it('should be able to run tests', () => {
        expect(1 + 2).toEqual(3);
    });
});

class MyClass {
    sum(a,b) {
        return this.serviceCall(a,b);
    }
    serviceCall(a,b) {
        return a+b;
    }
}
it.only('passes',() => {
    let obj = new MyClass();
    MyClass.prototype.serviceCall = jest.fn(()=>3);
    let result = obj.sum(1,2);
    expect(result).toBe(3);
})