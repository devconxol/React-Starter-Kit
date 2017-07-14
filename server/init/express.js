import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import compression from 'compression';

import helmet from 'helmet'
import {ENV} from '../../config/env'

export default (app) => {
    app.set('port', (process.env.PORT || 2020));

    if(ENV === 'production'){
        app.use(compression());
        app.use(helmet());
    }

    app.use(express.static(path.join(process.cwd(), 'public')));

    console.log('--------------------------');
    console.log('===> 😊  Starting Server . . .');
    console.log(`===>  Environment: ${ENV}`);
    console.log(`===>  Listening on port: ${app.get('port')}`);
    if (ENV === 'production') {
        console.log('===> 🚦  Note: In order for authentication to work in production');
        console.log('===>           you will need a secure HTTPS connection');
    }
    console.log('--------------------------');

}