class paymentSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    charge(stripeToken, stripeMoney) {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'payment',
                data: {
                    profileId: localStorage.getItem('profileId'),
                    stripeToken,
                    stripeMoney
                }
            })
            .then(response => console.log(response.data));
    };

}

export default paymentSvc;