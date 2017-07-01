import axio from 'axios';
import {
    currentUserQuery,
    signInQuery,
    signUpQuery,
    signOutQuery,

    eventListQuery

} from './actions/Queries'

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
    },
    signOut: () => {
        const query = signOutQuery();
        return requests.post(query)
    }
};

const Event = {
    list: () => {
        const query = eventListQuery();
        return requests.post(query)
    }
};


export default {
    Auth,
    Event,
    setToken: _token => {
        axio.defaults.headers.common['Authorization'] = _token;

    }
}