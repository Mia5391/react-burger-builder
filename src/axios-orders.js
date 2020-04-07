import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-60d60.firebaseio.com'

});

export default instance;
