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
import { useContextState } from '../contextState';

export const crearEvento = async (userState) => {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    
    console.log(userState)
    return AxiosClient
      .post(`/eventos`, {
        ...userState
      }, {headers: {'Authorization': 'Bearer ' + tokenId},}).then((res) => { // si status code entre 200 y 299
        
        const idEvento = res.data.id_evento;
        console.log("este es el", idEvento)
        const idEventoValue = JSON.stringify(idEvento) // lo pasa a string 
        AsyncStorage.setItem('idEvento', idEvento) // guarda en el storage con el nombre id
       
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.res);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };



  
  export const traerEventosPorDepto = async () => {
    const { contextState, setContextState } = useContextState();
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id_departamento = contextState.codigo
    console.log(id_departamento)
    return AxiosClient
      .get(`/eventos/departamento/${id_departamento}`, {
  
      },{headers: {'Authorization': 'Bearer ' + tokenId},}).then((res) => { // si status code entre 200 y 299
        const eventos = res.data;
        return eventos
      })

      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };




  export const EliminarDepto = async () => {
    const { contextState, setContextState } = useContextState();
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    const id_departamento = contextState.codigo
    const idEvento = await AsyncStorage.getItem('idEvento') // trae del stoateg e l  token 
    console.log(id_departamento)
    return AxiosClient
      .delete(`/eventos/${idEvento}`, { //url de eliminar evento
  
      },{headers: {'Authorization': 'Bearer ' + tokenId},}).then((res) => {
       
      })
      .catch((err) => { 
        console.log(`register error`, err.response);
       
        throw err 
      }); 
  };

  

 
 