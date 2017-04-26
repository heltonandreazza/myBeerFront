class UserProfileCtrl {

    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, ngFB, $state, userProfileSvc) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.ngFB = ngFB;
        this.$state = $state;
        this.userProfileSvc = userProfileSvc;

        this.id = $stateParams.id;

        localStorage.setItem('appState', $state.current.name);
        // Set Header
        this.$scope.$parent.showHeader();
        this.$scope.$parent.clearFabs();
        this.$scope.isExpanded = false;
        this.$scope.$parent.setExpanded(false);
        this.$scope.$parent.setHeaderFab(false);

        //init properties
        this.user = {};
        this.friends = [];

        this.activate();
    }

    activate() {
        // Set Ink
        this.ionicMaterialInk.displayEffect();

        this.loadUser();
        this.loadFriends();
    }

    loadUser() {
        this.ngFB.api({
            path: '/me',
            params: { fields: 'id,name,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified,education,about,email ' }
        }).then(
            (user) => {
                this.user = user;
                localStorage.setItem('profileId', user.id);
                localStorage.setItem('user', JSON.stringify(user));
                this.userProfileSvc.createUser(this.user);
                console.log(this.user);
            },
            (error) => {
                alert('Facebook error: ' + error.error_description);
            });
    }

    loadFriends() {
        this.ngFB.api({
            path: '/me/friends',
        }).then(
            (taggable_friends) => {
                this.friends = taggable_friends.data;
                console.log('taggable_friends', this.friends);
                // Set Motion
                this.setMotion();
            },
            (error) => {
                alert('Facebook error: ' + error.error_description);
            });
    }

    setMotion() {
        this.$timeout(() => {
            this.ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 0);

        this.$timeout(() => {
            this.ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 0);
    }

    goCart() {
        this.$state.go('app.cart');
    }

}

export default UserProfileCtrl;