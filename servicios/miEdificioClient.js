import axios from 'axios';
import {BASE_URL} from '../config.js'

const miEdificioClient = axios.create({
    baseURL: BASE_URL,
})
export default miEdificioClient;