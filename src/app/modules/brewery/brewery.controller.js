class BreweryCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, brewerySvc, commonSvc) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.brewerySvc = brewerySvc;
        this.commonSvc = commonSvc;
        this.edit = $stateParams.edit;
        this.brewery = {
            owner: JSON.parse(localStorage.getItem('user'))
        };
        this.brewery.owner.fullName = this.brewery.owner.name;

        document.getElementById("myImgProfile").src = '../img/firstbrewery.jpg';
        document.getElementById("myImgBack").style.backgroundImage = "url('../img/back.jpg')";
        this.brewery.profilePic = '../img/firstbrewery.jpg';
        this.brewery.backPic = '../img/back.jpg';

        this.pick_config = {
            mimetype: 'image/*',
            container: 'window',
            services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
        };

        localStorage.setItem('appState', this.$state.current.name);

        this.activate();
    }


    activate() {
        if (this.edit) {
            this.loadBrewery();
        }
        this.ionicMaterialInk.displayEffect();
    }

    loadBrewery() {
        this.commonSvc.getBreweryByOwner()
            .then(brewery => {
                brewery.initDate = new Date(brewery.initDate);
                this.brewery = brewery;
                document.getElementById("myImgProfile").src = this.brewery.profilePic;
                document.getElementById("myImgBack").style.backgroundImage = "url('" + this.brewery.backPic + "')";
            });
    }

    uploadProfile() {
        console.log('uploadProfile');
        filepicker.pick(this.pick_config,
            (image) => {
                document.getElementById("myImgProfile").src = image.url;
                this.brewery.profilePic = image.url;
            },
            (FPError) => {
                console.log(FPError.toString());
            });
    }

    uploadBack() {
        console.log('uploadBack');
        filepicker.pick(this.pick_config,
            (image) => {
                document.getElementById("myImgBack").style.backgroundImage = "url('" + image.url + "')";
                this.brewery.backPic = image.url;
            },
            (FPError) => {
                console.log(FPError.toString());
            });
    }

    createBrewery(brewery) {
        if (this.edit) {
            this.brewerySvc.updateBrewery(brewery)
                .then(data => this.$state.go('app.myprofile'));
        } else {
            this.brewerySvc.createBrewery(brewery)
                .then(data => this.$state.go('app.myprofile'));
        }
    }

}

export default BreweryCtrl;