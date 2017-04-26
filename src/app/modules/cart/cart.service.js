class cartSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    getCartItems(id) {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'cart/' + localStorage.getItem('profileId'),
                data: {
                    profileId: localStorage.getItem('profileId'),
                    _id: id
                }
            })
            .then(response => response.data);
    };

    plusOne(id) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'plusOne',
                data: {
                    profileId: localStorage.getItem('profileId'),
                    _id: id
                }
            })
            .then(response => response.data);
    };

    minusOne(id) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'minusOne',
                data: {
                    profileId: localStorage.getItem('profileId'),
                    _id: id
                }
            })
            .then(response => response.data);
    };

    removeFromCart(id) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'removeCart',
                data: {
                    profileId: localStorage.getItem('profileId'),
                    _id: id
                }
            })
            .then(response => response.data);
    };
}

export default cartSvc;