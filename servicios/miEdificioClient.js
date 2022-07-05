import axios from 'axios';
import {BASE_URL} from '../config.js'

const miEdificioClient = axios.create({
    baseURL: BASE_URL,
    
})

//instance.interceptors.request.use(function (config) {

   /* AsyncStorage.gettItem
    return{
        ...config, headers:{
            authorization: "Bearer "+ token
        }
    }
});/*/

export default miEdificioClient;

