
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


export const traerEdficios = async () => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id = await AsyncStorage.getItem('id')
    console.log("este es el id", id)
    
    return AxiosClient
      .get(`/edificios/${id}`, {
        headers: {'Authorization': 'Bearer ' + tokenId}
      }).then((res) => { // si status code entre 200 y 299

        const userInfo = res.data;
        
        return userInfo
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };

  /* response => AxiosResponse: {
    status: number 200 y 299
    data: any => el json del back
  }
    e => AxiosError: {
      request: respuesta de error del back
      status: number > 300
    } 
  
    class BaseException: Exception {
      messageCode: string //USER_NOT_FOUND
    }
  */


  export const traerNombre = async () => {
    const tokenId = await AsyncStorage.getItem('deptotoke') // trae del stoateg e l  token 
    const id = await AsyncStorage.getItem('id')
    return AxiosClient
      .get(`/administradores/${id}`, {
        headers: {'Authorization': 'Bearer ' + tokenId}
      })
      .then((res) => {
        const userInfo = res.data[0];
        console.log("hola este es",res.data[0].nombre)
        console.log(res.data)
        return userInfo
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };



