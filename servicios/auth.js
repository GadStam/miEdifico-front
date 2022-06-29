export const register = (userState, setUser, setLoading) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/administradores`, {
        data: {
          nombre,
          apellido,
          email,
          password,
        },
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        let userInfo = res.data;
        setUser(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setLoading(false);
      });
  };

  export const login = (email, password) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/logIn`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
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