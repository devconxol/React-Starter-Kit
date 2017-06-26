import axio from 'axios';
import {currentUserQuery, signInQuery, signUpQuery } from './actions/queries'

const ROOT_URL = 'http://localhost:3090/graphql';
const responseData = res => res.data;


const requests = {
  post: query =>
       axio.post(ROOT_URL, query).then(responseData)
};


const Auth = {
    current: (query = currentUserQuery()) =>
        requests.post(query),
    signIn: (email, password) => {
        const query = signInQuery(email, password);
        return requests.post(query)
    },
    signUp: (email, password) => {
        const query = signUpQuery(email, password);
        return requests.post(query)
    }
};


export default {
    Auth,
    setToken: _token => {
        axio.defaults.headers.common['Authorization'] = _token;

    }
}