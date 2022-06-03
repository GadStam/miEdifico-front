import React from 'react';
import axios from "axios";

const getBlogPosts = async () => {
    try {
    axios
    .get("https://leafcash.herokuapp.com/getUserData")
    .then(response => {
    const posts = response.data;
    setPosts(posts);
    })
    .catch(function(error) {
    console.log(error);
    });
    } catch (error) {
    console.log(err);
    }
    };

    export default getBlogPosts