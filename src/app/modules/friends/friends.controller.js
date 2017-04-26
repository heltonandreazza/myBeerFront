/* @ngInject */
function FriendsCtrl($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, ngFB, $state) {
    let vm = this;
    localStorage.setItem('appState', $state.current.name);
    vm.goCart = goCart;

    activate();

    function activate() {
        // Set Ink
        ionicMaterialInk.displayEffect();

        loadFriends();
    }

    function goCart() {
        console.log('go');
        $state.go('profile');
    }

    function loadFriends() {
        ngFB.api({
            path: '/me/taggable_friends',
        }).then(
            function(taggable_friends) {
                vm.friends = taggable_friends.data;
                console.log('taggable_friends', vm.friends);
                setMotion();
            },
            function(error) {
                alert('Facebook error: ' + error.error_description);
            });
    }

    function setMotion() {
        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 0);
    }

}

export default FriendsCtrl;