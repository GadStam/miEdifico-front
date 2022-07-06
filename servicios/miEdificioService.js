import AxiosClient from './miEdificioClient';
import React, {useState, useEffect, useContext} from 'react';
import log from '../screens/LogIn/LogInAdministrador'
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

  export const login = (userState) => {
    console.log(userState);
    AxiosClient
      .post(`/administradores/logIn`, {
        ...userState
      })
      .then((res) => {
        //let token = res.data.token;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`logIn error ${e}`);
      });
  };

