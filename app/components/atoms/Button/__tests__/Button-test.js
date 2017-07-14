import Button from '../index';
import {renderer} from '../../../../tests/setup';

describe('Button', () => {
    let wrapper;
   it('renders children when passed to it', () => {
       wrapper = renderer(Button, {children: 'love'})
       expect(wrapper.contains('love')).toBeTruthy()
   });
   it('renders props when passed to it', () => {
       wrapper = renderer(Button, {love: 'me'})
       expect(wrapper.find({love: 'me'})).toHaveLength(1)
   })
});