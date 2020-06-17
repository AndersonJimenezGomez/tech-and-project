class AuthenticationService{

    storeSuccessfullLogIn(email,password){
        sessionStorage.setItem('authenticatedUser',email);
    }
}

export default new AuthenticationService();
