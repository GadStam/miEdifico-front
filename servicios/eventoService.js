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
    const tokenId = await AsyncStorage.getItem('deptotoke') // trae del stoateg e l  token 
    
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



  
  export const traerEventosPorDepto = async (cod) => {
    console.log("entre a traer los eveeentos")
    console.log(cod)
    
    const tokenId = await AsyncStorage.getItem('deptotoke') // trae del stoateg e l  token 
    console.log(tokenId)
    
    
    return AxiosClient
      .get(`/eventos/departamento/${cod}`, {
        
      }).then((res) => { // si status code entre 200 y 299
        console.log("exito")
        const eventos = res.data;
        console.log("los eventos del service son:",eventos)
        return eventos
        
      })
      .catch((err) => { // status >= 300
        console.error(err)
        console.log(`register error`, err.response);
       
        throw err //propagar error
      }); // => Promise<AxiosResponse>
  };




  export const EliminarDepto = async (id) => {
   
    const tokenId = await AsyncStorage.getItem('deptotoke') // trae del stoateg e l  token 
    console.log(tokenId)
    return AxiosClient
      .delete(`/eventos/${id}`, { //url de eliminar evento
  
      }).then((res) => {
       
      })
      .catch((err) => { 
        console.log(`register error`, err.response);
       console.error(err)
        throw err 
      }); 
  };

  

 
 