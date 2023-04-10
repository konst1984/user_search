import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";

import Form from "../Form/Form";
import {setError, setUser} from "../../store/slices/userSlice";
import {useAppDispatch} from "../../hooks/redux-hooks";


const SignUp = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const handleRegister = (email:string, password:string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/login');
      })
      .catch((error) => {
        dispatch(setError(error))
      });
  }

  return (
    <Form
      title="register"
      handleClick={handleRegister}
    />
  );
};

export default SignUp;