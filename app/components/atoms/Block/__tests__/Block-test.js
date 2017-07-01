import React from 'react';
import { shallow } from 'enzyme';
import Block from '../index';

const renderer = (props = {}) => shallow(<Block {...props} />);

describe('Bock Atom', () => {
    let wrapper;
    it('renders children when passed in', () => {
        wrapper = renderer({children: 'test'});
        expect(wrapper.contains('test')).toBeTruthy()
    });

    it('renders props when passed in', () => {
        wrapper = renderer({id: 'foo'});
        expect(wrapper.find({id: 'foo'})).toHaveLength(1)
    })
});