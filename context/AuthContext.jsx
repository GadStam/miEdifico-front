import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, useEffect, createContext} from 'react';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [userInfo, setUserInfo] = useState({});
const [isLoading, setIsLoading] = useState(false);



const register = (nombre, email, password)  => {
    setIsLoading(true)
axios.post(`${BASE_URL}/register`,{
    nombre, email, password
}).then(res => {
let userInfo=res.data;
setUserInfo(userInfo)
AsyncStorage.setItem('userInfo', JSON .stringify(userInfo));
setIsLoading(false)
console.log(userInfo)
}).catch(e => {
console.log(`register error ${e}`)
setIsLoading(false)
})
}

const login = (email, password)  => {
    setIsLoading(true)
axios.post(`${BASE_URL}/logIn`,{
    email, password
}).then(res => {
let userInfo=res.data;
setUserInfo(userInfo)
AsyncStorage.setItem('userInfo', JSON .stringify(userInfo));
setIsLoading(false)
console.log(userInfo)
}).catch(e => {
console.log(`logIn error ${e}`)
setIsLoading(false)
})
}


    return(
    <AuthContext.Provider value={{
       isLoading,
       userInfo,
        register,
        login
        }}>
         {children} 
         </AuthContext.Provider>
    );
}