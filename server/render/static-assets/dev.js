import {GOOGLE_ANALYTICS_ID} from '../../../config/env'

const createAppScript = () => '<script type="text/javascript" ' +
                        'charset="UTF-8" src="/assets/app.js"></script>';



const createStylesheets = () => `
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css" />

`;


export {createAppScript, createStylesheets}