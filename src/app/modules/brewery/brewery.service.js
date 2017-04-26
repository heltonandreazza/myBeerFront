class brewerySvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    createBrewery(brewery) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'brewery',
                data: brewery
            })
            .then(response => console.log(response.data));
    };

    updateBrewery(brewery) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'updateBrewery',
                data: brewery
            })
            .then(response => console.log(response.data));
    };

}

export default brewerySvc;