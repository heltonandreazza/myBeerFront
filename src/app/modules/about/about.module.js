import AboutCtrl from './about.controller';
import aboutSvc from './about.service';

export default angular.module('app.about', [])
    .controller('AboutCtrl', AboutCtrl)
    .service('aboutSvc', aboutSvc)
    .name;