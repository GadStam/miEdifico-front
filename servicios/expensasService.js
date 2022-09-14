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

export const crearExpensa = async (userState) => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id = await AsyncStorage.getItem('id')
    console.log(userState)
    return AxiosClient
      .post(`/expensas/${id}`, {
        ...userState
      }, {headers: {'Authorization': 'Bearer ' + tokenId},}).then((res) => { // si status code entre 200 y 299
        
       
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };