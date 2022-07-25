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
    .then(async(res) => {
      let userToken = res.data.token; // poner punto (nombe que viene del back)
      let userId = res.data.id
      const idValue = JSON.stringify(userId) // lo pasa a string
      await AsyncStorage.setItem('token', userToken) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('id', idValue) // guarda en el storage con el nombre id
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};

export const departamentologin = async (userState) => {
  console.log(userState.codigo);
  const codigodepto = userState.codigo
  return AxiosClient
    .get(`/departamentos/${codigodepto}`, {
     
    })
    .then(async(res) => {
      let departamentoToken = res.data.token; // poner punto (nombe que viene del back)
      await AsyncStorage.setItem('deptotoke', departamentoToken) // guarda en el storage con el nombre token 
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};





