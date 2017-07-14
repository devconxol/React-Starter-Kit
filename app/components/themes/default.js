import {reversePalette} from 'styled-theme/composer';
import coolorsToHex from 'coolors-to-hex';
const theme = {};

theme.palette = {
    primary: coolorsToHex('https://coolors.co/9a348e-d664be-d782ba-e18ad4-df99f0'),
    blue: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
    secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
    danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
    alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
    success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
    grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff'],
    white: ['#fff', '#fff', '#eee']
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif'
};

export default theme;