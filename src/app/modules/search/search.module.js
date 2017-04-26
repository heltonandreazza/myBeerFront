import SearchCtrl from './search.controller';
import searchSvc from './search.service';

export default angular.module('app.search', [])
    .controller('SearchCtrl', SearchCtrl)
    .service('searchSvc', searchSvc)
    .name;