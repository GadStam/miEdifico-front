import AxiosClient from './miEdificioClient';
import React, {useState, useEffect, useContext} from 'react';

import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export const register = async (userState) => {
    setLoading(true);
    AxiosClient
      .post(`/administradores`, {
        ...userState
      })
      .then((res) => {
        let userInfo = res.status;
        setLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setLoading(false);
      });
  };

  export const login = (userState) => {
    setLoading(true);
    AxiosClient
      .post(`/logIn`, {
        ...userState
      })
      .then((res) => {
        let token = res.data.token;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`logIn error ${e}`);
        setLoading(false);
      });
  };
