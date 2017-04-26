class searchSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    searchBrewery(search_term = "") {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'searchBrewery',
                data: {
                    search_term
                }
            })
            .then(response => response.data);
    };

    getBreweries() {
        return this.$http({
                method: 'GET',
                url: this.SERVER.URL + 'brewery'
            })
            .then(response => response.data);
    };
}

export default searchSvc;