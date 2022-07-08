
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
    return AxiosClient
      .get(`/edificios/${id}`, {
        headers: {'Authorization': 'Bearer: ' + tokenId}
      })
      .then((res) => {
        let userInfo = res.data.Direccion;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };


  export const traerNombre = async () => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    return AxiosClient
      .get(`/edificios/${id}`, {
        headers: {'Authorization': 'Bearer: ' + tokenId}
      })
      .then((res) => {
        let userInfo = res.data.Nombre;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };



