class RatingCtrl {
    /* @ngInject */
    constructor($stateParams, $timeout, ngFB, ionicMaterialInk, $state, commonSvc) {
        this.$timeout = $timeout;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.commonSvc = commonSvc;

        this.id = $stateParams.id;

        this.activate();
        localStorage.setItem('appState', this.$state.current.name);
    }


    activate() {
        this.loadBrewery();
        this.ionicMaterialInk.displayEffect();
    }

    loadBrewery() {
        this.commonSvc.getBrewery(this.id)
            .then(brewery => this.brewery = brewery);
    }

    goCart() {
        this.$state.go('app.cart');
    }

}

export default RatingCtrl;