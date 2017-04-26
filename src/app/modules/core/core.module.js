import AppCtrl from './app.controller';
import run from './app.run';
import config from './app.config';

export default angular.module('app.core', [])
    .controller('AppCtrl', AppCtrl)
    .run(run)
    .constant("SERVER", {
        URL: "http://localhost:3000/"
    })
    .config(config)
    .name;