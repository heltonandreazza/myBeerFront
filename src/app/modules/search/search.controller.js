class SearchCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, searchSvc) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.ngFB = ngFB;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.searchSvc = searchSvc;

        this.activate();

        localStorage.setItem('appState', this.$state.current.name);
    }


    activate() {
        this.loadWatchers();
        this.ionicMaterialInk.displayEffect();
    }

    goCart() {
        this.$state.go('app.cart');
    }

    goBrewery(id) {
        this.$state.go('app.profile', { id: id });
    }

    loadWatchers() {
        this.$scope.$watch('vm.search', (newValue, oldValue) => {
            //set filter with elastic search and back-end
            this.searchSvc.searchBrewery(newValue)
                .then(breweries => {
                    this.breweries = breweries;
                    //load efects
                    this.$timeout(() => {
                        this.ionicMaterialMotion.blinds({
                            startVelocity: 4100
                        });
                    }, 0);
                });
        }, true);
    }
}

export default SearchCtrl;