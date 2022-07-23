import AxiosClient from './miEdificioClient';
import React, {
  useState,
  useEffect,
  useContext
} from 'react';
import {
  registerAsset
} from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const crearEdficiosAdmin = async (userState) => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id = await AsyncStorage.getItem('id')
    console.log(userState)
    return AxiosClient
      .post(`/edificios/${id}`, {
        headers: {'Authorization': 'Bearer ' + tokenId},
        ...userState
      }).then((res) => { // si status code entre 200 y 299

        const userInfo = res.data;
        console.log(res.data)
        return userInfo
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };

 
  export const traerEspacios = async () => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    return AxiosClient
      .get(`/espacios`, {
        headers: {'Authorization': 'Bearer ' + tokenId}
      }).then((res) => { // si status code entre 200 y 299

        const userInfo = res.data[0].tipo_espacio;
        console.log(res.data[0].tipo_espacio , "cualq cosa")
        return userInfo
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };