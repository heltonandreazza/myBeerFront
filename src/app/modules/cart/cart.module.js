import CartCtrl from './cart.controller';
import cartSvc from './cart.service';

export default angular.module('app.cart', [])
    .controller('CartCtrl', CartCtrl)
    .service('cartSvc', cartSvc)
    .name;