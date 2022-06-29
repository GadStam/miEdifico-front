import axios from 'axios';
import {BASE_URL} from '../config.js'

export default miEdificioClient = axios.create({
    baseURL: BASE_URL,
})