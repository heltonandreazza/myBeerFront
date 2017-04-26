class activitySvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    getUserHistory() {
        return this.$http({
                method: 'POST',
                url: this.SERVER.URL + 'userHistory',
                data: {
                    profileId: localStorage.getItem('profileId')
                }
            })
            .then(response => response.data);
    };
}

export default activitySvc;