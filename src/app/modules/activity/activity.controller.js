class ActivityCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, activitySvc, $state) {
        console.log('gone');
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.activitySvc = activitySvc;

        this.activate();

        localStorage.setItem('appState', this.$state.current.name);
    }


    activate() {
        this.loadUserHistory();
    }

    loadUserHistory() {
        this.activitySvc.getUserHistory()
            .then(payments => {
                this.payments = payments;
            });
    }

    goCart() {
        this.$state.go('app.cart');
    }

}

export default ActivityCtrl;