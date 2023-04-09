import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from "../Form";
import {setError, setUser} from "store/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux-hooks";

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password:string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/user_search');
      })
      .catch((error) => {
        dispatch(setError(error))
      });
  }

  return (
    <Form
      title="sign in"
      handleClick={handleLogin}
    />
  )

};

export default Login;