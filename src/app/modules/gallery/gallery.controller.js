/* @ngInject */
function GalleryCtrl($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {
    let vm = this;
    localStorage.setItem('appState', $state.current.name);
    activate();

    function activate() {
        loadMaterialEffects();
    }

    function loadMaterialEffects() {
        // Activate ink for controller
        ionicMaterialInk.displayEffect();

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    }

}

export default GalleryCtrl;