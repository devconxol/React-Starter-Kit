import {GOOGLE_ANALYTICS_ID} from '../../../config/env'

const createAppScript = () => '<script type="text/javascript" ' +
                        'charset="UTF-8" src="/assets/app.js"></script>';

const createTrackingScript = () => GOOGLE_ANALYTICS_ID ?
        createAnalyticsSnippet(GOOGLE_ANALYTICS_ID): '';

const createAnalyticsSnippet = id =>
    `<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '${id}', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>`;


const createStylesheets = () =>
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">';


export {createAppScript, createTrackingScript, createStylesheets}