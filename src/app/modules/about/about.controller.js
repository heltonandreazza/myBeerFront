class AboutCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, commonSvc, aboutSvc) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.commonSvc = commonSvc;
        this.aboutSvc = aboutSvc;
        console.log($stateParams)
        this.about = $stateParams.about;
        this.id = $stateParams.id;

        this.activate();

        localStorage.setItem('appState', this.$state.current.name);
    }


    activate() {
        this.loadAbout();
        this.ionicMaterialInk.displayEffect();
    }

    loadAbout() {
        if (this.about == 'user') {
            this.user = JSON.parse(localStorage.getItem('user'));
            console.log(this.user)
            this.setMotion();
        } else if (this.about == 'brewery') {
            this.loadBrewery()
        }
    }

    loadBrewery() {
        if (this.id) {
            this.commonSvc.getBrewery(this.id)
                .then(brewery => {
                    this.brewery = brewery;
                    console.log(this.brewery)
                    this.setMotion();
                });
        } else {
            this.commonSvc.getBreweryByOwner()
                .then(brewery => {
                    this.brewery = brewery;
                    this.id = this.brewery._id;
                    this.setMotion();
                });
        }
    }

    setMotion() {
        this.$timeout(() => {
            this.ionicMaterialMotion.blinds({
                startVelocity: 4100
            });
        }, 0);
    }
}

export default AboutCtrl;