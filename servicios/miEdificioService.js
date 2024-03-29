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
import { actionTypes, useContextState } from '../contextState.js';

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
      const idValue = userId.toString() // lo pasa a string
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
  await AsyncStorage.setItem('codigodepto', codigodepto) // guarda en el storage con el nombre token 
  return AxiosClient
    .get(`/departamentos/${codigodepto}`, {
     
    })
    .then(async(res) => {
      let departamentoToken = res.data.token; // poner punto (nombe que viene del back)
      let pisoInquilino = res.data.depto
      let idEdificio = res.data.id_edificio
      console.log("este es el token:",departamentoToken)
      await AsyncStorage.setItem('deptotoke', departamentoToken) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('pisoInquilino', pisoInquilino) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('idEdificio', idEdificio) // guarda en el storage con el nombre token 
      return pisoInquilino
    })
    .catch((e) => {
      console.error(e)
      console.log(`register error`, e.res);
      throw "error" //propagar error
    });
};

export const traerPiso = async (userState) => {
 
  return AxiosClient
    .get(`/departamentos/${userState}`, {
     
    })
    .then(async(res) => {
      let pisoInquilino = res.data.depto
      return res.data
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};

export const traerDirec = async (id, token) => {
  return AxiosClient
    .get(`/edificios/edificio/${id}`, {
      headers: {'Authorization': 'Bearer ' + token}
    })
    .then(async(res) => {
      console.log(res.data)
      return res.data
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};







