import React from 'react';
import {storiesOf, action} from '@storybook/react';
import UserButton from './index';


storiesOf('User Button', module)
    .add('Without user', () => (
        <UserButton onLogin={action('login')} onLogout={action('logout')} />
    ))

    .add('With User', () => (
        <UserButton user={
            {picture: 'https://graph.facebook.com/1796830437231161/picture?type=normal'}
        } onLogin={action('login')} onLogout={action('logout')}/>
    ));