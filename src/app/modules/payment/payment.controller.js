class PaymentCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, paymentSvc, commonSvc) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.paymentSvc = paymentSvc;
        this.commonSvc = commonSvc;
        this.payment = {};
        this.totalPrice = $stateParams.totalPrice;
        // Stripe Response Handler
        this.$scope.stripeCallback = (code, result) => {
            if (result.error) {
                this.stripeError = result.error.message;
            } else {
                // Grab the form:
                let form = angular.element(document.getElementsByName('form'));

                // Get the token ID:
                var token = result.id;
                console.log(token);

                // Insert the token ID into the form so it gets submitted to the server:
                form.append((`<input type="hidden" name="stripeToken" value="${token}">`));

                // Submit the form:
                // form.get(0).submit();
                this.paymentSvc.charge(token, this.totalPrice)
                    .then(response => {
                        this.processing = false;
                        this.$state.go('app.activity');
                    });
            }
        };
    }

    onSubmit() {
        this.processing = true;
    }

    goCart() {
        this.$state.go('app.cart');
    }

}

export default PaymentCtrl;