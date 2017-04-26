import UserProfileCtrl from './userProfile.controller';
import userProfileSvc from './userProfile.service';

export default angular.module('app.userProfile', [])
    .service('userProfileSvc', userProfileSvc)
    .controller('UserProfileCtrl', UserProfileCtrl)
    .name;