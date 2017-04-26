import PaymentCtrl from './payment.controller';
import paymentSvc from './payment.service';

export default angular.module('app.payment', [])
    .controller('PaymentCtrl', PaymentCtrl)
    .service('paymentSvc', paymentSvc)
    .name;