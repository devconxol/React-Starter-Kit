import React from 'react';
import { storiesOf } from '@storybook/react';
import Atom from './index';


storiesOf('Atom', module)
    .add('default', () => (
        <Atom>Hello</Atom>
    ))
    .add('reverse', () => (
        <Atom reverse > Hello </Atom>
    ));