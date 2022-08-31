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
      let idEdificio = res.data.edificio
      await AsyncStorage.setItem('deptotoke', departamentoToken) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('pisoInquilino', pisoInquilino) // guarda en el storage con el nombre token 
      await AsyncStorage.setItem('idEdificio', idEdificio) // guarda en el storage con el nombre token 
      return pisoInquilino
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};

export const traerPiso = async (userState) => {
 
  return AxiosClient
    .get(`/departamentos/${userState}`, {
     
    })
    .then(async(res) => {
     
      let pisoInquilino = res.data.depto
      return pisoInquilino
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};

export const traerEventos = async () => {
  const idEdificio = await AsyncStorage.getItem('idEdificio')
  console.log('idEdificio')
  return AxiosClient
    .get(`/eventos/${idEdificio}`, {

    }).then((res) => { // si status code entre 200 y 299
      const eventos = res.data;
      return eventos
    })
    .catch((err) => { // status >= 300
      console.log(`register error`, err.response);
     
      throw err //propagar error
    }); // => Promise<AxiosResponse>
};

export const traerEventosPorDepto = async () => {
  const { contextState, setContextState } = useContextState();
  const id_departamento = contextState.codigo
  console.log(id_departamento)
  return AxiosClient
    .get(`/eventos/departamentos/${id_departamento}`, {

    }).then((res) => { // si status code entre 200 y 299
      const eventos = res.data;
      return eventos
    })
    .catch((err) => { // status >= 300
      console.log(`register error`, err.response);
     
      throw err //propagar error
    }); // => Promise<AxiosResponse>
};





