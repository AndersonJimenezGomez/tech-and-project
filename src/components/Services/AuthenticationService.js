class AuthenticationService{

    storeSuccessfullLogIn(email,password){
        sessionStorage.setItem('authenticatedUser',email);
    }

    logOut(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogged(){
       const email = sessionStorage.getItem('authenticatedUser')
       if(email===null){
           return false;
       }
       return true;
    }
}

export default new AuthenticationService();
