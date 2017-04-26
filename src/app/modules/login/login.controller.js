/* @ngInject */
function LoginCtrl($scope, $timeout, $stateParams, ionicMaterialInk, ngFB, $state, SERVER) {
    let vm = this;
    localStorage.setItem('appState', $state.current.name);
    //emit SendUp event up
    $scope.$emit("SendUp", false);

    //public methods
    vm.fbLogin = fbLogin;

    activate();

    function activate() {
        loadMaterialEffects();

    }

    // FACEBOOK login
    function fbLogin() {
        $scope.$emit("SendUp", true);
        ngFB.login({ scope: 'email, publish_actions, user_friends' }).then(
            // , user_friends , user_about_me, user_education_history, user_work_history, manage_pages, publish_pages, pages_show_list, 
            function(response) {
                if (response.status === 'connected') {
                    console.log('Facebook login succeeded', response);
                    localStorage.setItem('token', response.authResponse.accessToken);

                    $state.go('app.userprofile');
                } else {
                    alert('Facebook login failed');
                }
            });
    };

    function loadMaterialEffects() {
        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    }

}

export default LoginCtrl;