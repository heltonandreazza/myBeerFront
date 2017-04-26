class userProfileSvc {
    /*@ngInject*/
    constructor($http, SERVER) {
        this.$http = $http;
        this.SERVER = SERVER;
    }

    createUser({ id, name, picture, address, email }) {
        this.$http({
            method: 'POST',
            url: this.SERVER.URL + 'login/',
            data: {
                profileId: id,
                fullName: name,
                profilePic: picture.data.url,
                address,
                email,
                token: localStorage.getItem('token')
            }
        });
    };
}

export default userProfileSvc;