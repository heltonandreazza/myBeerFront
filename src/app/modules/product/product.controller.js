class ProductCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, productSvc, commonSvc) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.productSvc = productSvc;
        this.commonSvc = commonSvc;

        this.id = $stateParams.id;
        this.product = {};
        if (this.id) {
            this.quantity = 0;
        }
        localStorage.setItem('appState', this.$state.current.name);

        this.activate();
    }


    activate() {
        this.loadCategories();
        if (this.id) {
            this.loadProduct(this.id);
        }
        this.ionicMaterialInk.displayEffect();
    }

    loadProduct(id) {
        this.productSvc.getProduct(id)
            .then(product => {
                this.product = product;
                document.getElementById("myImg").src = this.product.image;
            });
    }

    loadCategories() {
        this.productSvc.getCategories()
            .then(categories => this.categories = categories);
    }

    upload() {
        filepicker.pick({
                mimetype: 'image/*',
                container: 'window',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
            },
            (image) => {
                document.getElementById("myImg").src = image.url;
                this.product.image = image.url;
                console.log(this.product.image)
                console.log(image);
            },
            (FPError) => {
                console.log(FPError.toString());
            });
    }

    goCart() {
        this.$state.go('app.cart');
    }

    goBrewery(id) {
        this.$state.go('app.profile', { id: id });
    }

    createProduct(product) {
        this.commonSvc.getBreweryByOwner()
            .then(brewery => {
                if (brewery) {
                    this.productSvc.createProduct(brewery, product)
                        .then(data => this.$state.go('app.myprofile'));
                }
            });
    }

    addToCart(product) {
        product.quantity = this.quantity;

        if (product.quantity > 0) {
            this.commonSvc.addToCart(product)
                .then(response => {
                    console.log(response);
                    this.quantity = 0;
                });
        }
    }
}

export default ProductCtrl;