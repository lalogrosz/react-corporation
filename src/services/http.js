import axios from 'axios';

class Http {
    get(endpoint) {        
        return axios.get(process.env.REACT_APP_APIURL + endpoint);
    }

    // Extra methods not necessary (post, put, delete...)
}

export default new Http();