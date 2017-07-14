import React from 'react';
import {storiesOf} from '@storybook/react';
import Link from './index';


storiesOf('Link')
    .addWithChapters('Link Styles', {
        chapters: [
            {
                sections: [
                    {
                        title: 'Default Link',
                        sectionFn: () => <Link to="/" >A Link</Link>
                    },
                    {
                        title: 'Coled Link',
                        sectionFn: () => <Link to="/" palette='secondary' >A Link</Link>
                    },
                    {
                        title: 'Reverse Link',
                        sectionFn: () => <Link to="/" reverse >A Link</Link>
                    },

                ]
            }
        ]

    })