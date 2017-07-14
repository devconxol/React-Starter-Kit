import Atom from '../index';
import {renderer} from '../../../../tests/setup'


describe('Atom', () => {
    let wrapper;
    it('renders children when passed to it', () => {
        wrapper = renderer(Atom, {children: 'love'});
        expect(wrapper.contains('love')).toBeTruthy()
    });

    it('renders props when passed to it', () => {
        wrapper = renderer(Atom, {id: 'foo', name: 'rufus'});
        expect(wrapper.find({name: 'rufus'})).toHaveLength(1)
    })
});