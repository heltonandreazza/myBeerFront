class productSvc {
    /*@ngInject*/
    constructor($http, SERVER, commonSvc) {
        this.$http = $http;
        this.SERVER = SERVER;
        this.commonSvc = commonSvc;
    }

    createProduct(brewery, product) {
        product.brewery = brewery;
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'product',
                data: product
            })
            .then(response => console.log(response.data));
    };

    getCategories() {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'category'
            })
            .then(response => response.data);
    }

    getProduct(id) {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'product/' + id
            })
            .then(response => response.data);
    }
}

export default productSvc;