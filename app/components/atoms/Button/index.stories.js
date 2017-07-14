import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index';

/*
primary
secondary
danger
alert
success
grayscale
white
*/

storiesOf('Button')
    .addWithChapters('Button styles', {
        chapters: [
            {
                sections: [
                    {
                        title: 'Default Button',
                        sectionFn: () => (<Button >Default</Button>)
                    },
                    {
                        title: 'Success Button',
                        sectionFn: () => (<Button palette='success' >Success</Button>)
                    },
                    {
                        title: 'Danger Button',
                        sectionFn: () => (<Button palette='danger' >Danger</Button>)
                    },
                    {
                        title: 'Disabled Button',
                        sectionFn: () => (<Button disabled >Disabled</Button>)
                    },
                    {
                        title: 'Tranparent Button',
                        sectionFn: () => (<Button transparent >Disabled</Button>)
                    },
                    {
                        title: 'Tranparent & Disabled Button',
                        sectionFn: () => (<Button transparent disabled >Disabled</Button>)
                    },
                    {
                        title: 'Custom height',
                        sectionFn: () => (<Button height={100} >Disabled</Button>)
                    },
                    {
                        title: 'with link',
                        sectionFn: () => (<Button href='http://www.devconxol.io' >devconxol.io</Button>)
                    },
                    {
                        title: 'with "to" prop',
                        sectionFn: () => (<Button to="/login" >login</Button>)
                    }
                ]
            },
        ]
    });