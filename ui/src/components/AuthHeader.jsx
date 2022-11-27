import React , {useEffect, useState} from 'react';
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import { gapi} from 'gapi-script';
import './AuthHeader.css';

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}) {
    console.log(query)
    console.log(variables)
    try {
      const response = await fetch(window.ENV.UI_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query, variables })
      });
      const body = await response.text();
      const result = JSON.parse(body, jsonDateReviver);
  
      if (result.errors) {
        const error = result.errors[0];
        if (error.extensions.code == 'BAD_USER_INPUT') {
          const details = error.extensions.exception.errors.join('\n ');
          alert(`${error.message}:\n ${details}`);
        } else {
          alert(`${error.extensions.code}: ${error.message}`);
        }
      }
      return result.data;
    } catch (e) {
      alert(`Error in sending data to server: ${e.message}`);
      return null;
    }
  }

export default function AuthHeader(){

    const clientId="559196906501-bqac4bfhiuakmnp53csn2m4epfm1eo6v.apps.googleusercontent.com";
    useEffect( () => {
        gapi.load("client:auth2",()=> {
            gapi.auth2.init({clientId:clientId})
        })
    },[])
    const [user , setuser] = useState();
    const logout = () => {
        console.log("Logged Out");
        setuser("");
    }
    const success = async (response) => {
        console.log("Login Success");
        /**console.log(response);*/
        console.log(response.googleId);
        setuser(response.wt.Ad);
        const person = {
            name: response.wt.Ad, token: response.googleId,
        }
        const query = `mutation addUser($person: InputUser!) {
            addUser(user: $person) {
              id
            }
          }`;
        const data = await graphQLFetch(query, { person });
    }
    const failure = ( response ) => {
        console.log("Login Failure");
        console.log(response);
    }
    return (<header>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={success}
            onFailure={failure}
        />
        {/**cookiePolicy={'single_host_origin'}*/}
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
        {user && <h1>Hi , {user}</h1>}
        </header>);
}
