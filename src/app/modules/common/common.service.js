class commonSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    getBrewery(id) {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'brewery/' + id
            })
            .then(response => response.data);
    };

    getBreweryByOwner() {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'getBreweryByOwner',
                data: {
                    profileId: localStorage.getItem('profileId')
                }
            })
            .then(response => response.data);
    };

    addToCart(product) {
        product.profileId = localStorage.getItem('profileId');
        console.log(product);
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'addCart',
                data: product
            })
            .then(response => response.data);
    }
}

export default commonSvc;