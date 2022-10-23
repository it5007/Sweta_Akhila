import React , {useEffect, useState} from 'react';
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import { gapi} from 'gapi-script'

export default function AuthHeader(){

    const clientId="559196906501-bqac4bfhiuakmnp53csn2m4epfm1eo6v.apps.googleusercontent.com"
    const [user , setuser] = useState();
    const logout = () => {
        console.log("Logged Out");
        setuser("");
    }
    const success = (response) => {
        console.log("Login Success");
        console.log(response);
        setuser(response.wt.Ad);
    }
    const failure = (response) => {
        console.log("Login Failure");
        console.log(response);
    }
    useEffect( () => {
        gapi.load("client:auth2",()=> {
            gapi.auth2.init({clientId:clientId})
        })
    },[])
    return (
        <header>
        <GoogleLogin
            clientId = {clientId} 
            buttonText="Login"
            onSuccess={success}
            onFailure={failure}
        />
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
        {user && <h1>Hi , {user}</h1>}
        </header>
    );
}