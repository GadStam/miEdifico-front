import AxiosClient from './miEdificioClient';
import React, {useState, useEffect, useContext} from 'react';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export const register = async (userState) => {
  console.log(userState);  
  AxiosClient
      .post(`/administradores`, {
        ...userState
      })
      .then((res) => {
        let userInfo = res.status;
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
        let userInfo = res.status;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
        throw "error" //propagar error
      });
  };





