import ProductCtrl from './product.controller';
import productSvc from './product.service';

export default angular.module('app.product', [])
    .controller('ProductCtrl', ProductCtrl)
    .service('productSvc', productSvc)
    .name;