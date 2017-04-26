function config($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
    //set token interceptors
    $httpProvider.interceptors.push(function($q) {
        return {
            'request': function(config) {

                config.headers['Token'] = localStorage.getItem('token');
                return config;
            }
        };
    });

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);


    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        params: {
            id: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.myprofile', {
        url: '/myprofile',
        params: {
            id: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.userprofile', {
        url: '/user-profile',
        params: {
            id: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/userProfile.html',
                controller: 'UserProfileCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.rating', {
        url: '/rating/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/rating.html',
                controller: 'RatingCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.about', {
        url: '/about',
        params: {
            id: null,
            about: 'user'
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.cart', {
        url: '/cart',
        views: {
            'menuContent': {
                templateUrl: 'templates/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.breweryproducts', {
        url: '/brewery-products',
        views: {
            'menuContent': {
                templateUrl: 'templates/breweryProducts.html',
                controller: 'BreweryProductsCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.product', {
        url: '/product',
        params: {
            id: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/product.html',
                controller: 'ProductCtrl',
                controllerAs: 'vm'
            }
        }
    })

    .state('app.brewery', {
        url: '/brewery',
        params: {
            edit: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/brewery.html',
                controller: 'BreweryCtrl',
                controllerAs: 'vm'

            }
        }
    })

    .state('app.payment', {
        url: '/payment',
        params: {
            totalPrice: 0
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/payment.html',
                controller: 'PaymentCtrl',
                controllerAs: 'vm'

            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
}

export default config;