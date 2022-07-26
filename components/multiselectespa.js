import React from "react";
import axios from "axios";
import AxiosClient from '../servicios/miEdificioClient'
import AsyncStorage from '@react-native-async-storage/async-storage';;

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  async componentDidMount() {
    const tokenId = await AsyncStorage.getItem('token') // trae del stoateg e l  token 
    return AxiosClient
      .get(`/espacios`, {
        headers: {'Authorization': 'Bearer ' + tokenId}
      }).then((res) => { // si status code entre 200 y 299

        const persons = res.data;
        this.setState({ persons });
        
      })
      .catch((err) => { // status >= 300
        console.log(`register error`, err.response);
       
        throw err //propagar error
      });
  }

  render() {
    return (
      <select>
        {this.state.persons.map(person => <option>{person.tipo_espacio}</option>)}
      </select>
    );
  }
}
