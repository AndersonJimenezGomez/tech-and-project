import Swal from 'sweetalert2'
class AuthenticationService{

    storeSuccessfullLogIn(email,password){
        sessionStorage.setItem('authenticatedUser',email);
    }

    logOut(){
        sessionStorage.removeItem('authenticatedUser');
        console.log("deslogueo eo eo")
        Swal.fire({
            title: 'You have successfully logged out!',
            icon: 'info'
        });
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
