import Link from '../index';
import {renderer} from '../../../../tests/setup'


describe('Link', () => {
    let wrapper;
    it('renders children when passed to it', () => {
        wrapper = renderer(Link, {children: 'love'})
        expect(wrapper.contains('love')).toBeTruthy()
    })

    it('renders props when passed to it', () => {
        wrapper = renderer(Link, {love: 'me'})
        expect(wrapper.find({love: 'me'})).toHaveLength(1)
    })
})