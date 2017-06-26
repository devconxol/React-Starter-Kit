import React from 'react';
import { shallow, mount } from 'enzyme'
import App from '../index'

describe('App', () => {
    let wrapper;
    it('Wraps content with .app class', () => {
        wrapper = shallow(<App/>)
        expect(wrapper.find('.app').length).toEqual(1)
    })
});