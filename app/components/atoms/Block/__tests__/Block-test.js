import Block from '../index';
import {renderer} from '../../../../tests/setup'

describe('Bock Atom', () => {
    let wrapper;
    it('renders children when passed in', () => {
        wrapper = renderer(Block, {children: 'test'});
        expect(wrapper.contains('test')).toBeTruthy()
    });

    it('renders props when passed in', () => {
        wrapper = renderer(Block, {id: 'foo'});
        expect(wrapper.find({id: 'foo'})).toHaveLength(1)
    })
});