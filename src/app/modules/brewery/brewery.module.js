import BreweryCtrl from './brewery.controller';
import brewerySvc from './brewery.service';

export default angular.module('app.brewery', [])
    .controller('BreweryCtrl', BreweryCtrl)
    .service('brewerySvc', brewerySvc)
    .name;