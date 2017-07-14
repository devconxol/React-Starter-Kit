import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from './index';


storiesOf('Input', module)
    .add('default', () => (
        <Input/>
    ))
    .add('reverse', () => (
        <Input reverse/>
    ))
    .add('textarea', () => (
        <Input type='textarea'/>
    ))
    .add('height', () => (
        <Input height={100}/>
    ))
    .add('invalid', () => (
        <Input invalid/>
    ))
    .add('Checkbox', () => (
        <Input type='checkbox'/>
    ))
    .add('Radio', () => (
        <Input type='radio'/>
    ))
    .add('Select', () => (
        <Input type='select'>
            <option>1</option>
            <option>2</option>
        </Input>
    ))
