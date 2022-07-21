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

export const crearDepartamentos = async (userState) => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id = await AsyncStorage.getItem('id')
    console.log(tokenId)
    return AxiosClient
      .post(`/departamentos/${id}`, {
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


 