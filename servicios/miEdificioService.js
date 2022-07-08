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


export const register = async (userState) => {
  console.log(userState);
  AxiosClient
    .post(`/administradores`, {
      ...userState
    })
    .then((res) => {
      let userInfo = res.data;
    })
    .catch((e) => {
      console.log(`register error`, e.response);
    });
};

export const login = async (userState) => {
  console.log(userState);
  return AxiosClient
    .post(`/administradores/logIn`, {
      ...userState
    })
    .then((res) => {
      console.log(res.data);
      let userToken = res.data.token; // poner punto (nombe que viene del back)
      let userId = res.data.id
      const tokenValue = JSON.stringify(userToken) // lo pasa a string
      const idValue = JSON.stringify(userId) // lo pasa a string
      await AsyncStorage.setItem('token', tokenValue) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('id', idValue) // guarda en el storage con el nombre token 
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};




