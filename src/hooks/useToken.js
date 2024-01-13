import { useState } from "react";
import axios from "axios";

function useToken() {

      function getToken() {
         const userToken = localStorage.getItem('token');
         return userToken && userToken;
      };

     const [token, setToken] = useState(getToken());

      function saveToken(userToken) {
         localStorage.setItem('token', userToken);
         setToken(userToken);
      };

      function removeToken() {
         const headers = JSON.parse(token)
         const url = "https://exquisito-web.onrender.com/api/v1/auth/sign_out"
         axios.delete(url, { headers: {
            "client": headers['client'],
            "uid": headers['uid'],
            "access-token": headers['uToken']
         } }).then((res) => console.log(res)).catch((res) => console.log(res));
         localStorage.removeItem('token');
         setToken(null);
      };

      return {
         setToken: saveToken,
         token,
         removeToken
      };


};

export default useToken;