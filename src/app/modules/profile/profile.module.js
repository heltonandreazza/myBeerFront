import ProfileCtrl from './profile.controller';
import profileSvc from './profile.service';

export default angular.module('app.profile', [])
    .controller('ProfileCtrl', ProfileCtrl)
    .service('profileSvc', profileSvc)
    .name;