import ActivityCtrl from './activity.controller';
import activitySvc from './activity.service';

export default angular.module('app.activity', [])
    .controller('ActivityCtrl', ActivityCtrl)
    .service('activitySvc', activitySvc)
    .name;