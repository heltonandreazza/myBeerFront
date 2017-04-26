class profileSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    getProducts(id = "") {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'breweryProducts/' + id
            })
            .then(response => response.data);
    };

}

export default profileSvc;