import React from 'react';

import {SignUp} from "../../components/SignUp";
import PageLayout from "../../components/PageLayout/PageLayout";
import Motion from "../../components/Motion/Motion";


const RegisterPage = () => {
  return (
    <Motion>
      <PageLayout href = "/login" text = "Already have an account?" nameLink = "Sign in" title = "register">
        <SignUp />
      </PageLayout>
    </Motion>
  );
};

export default RegisterPage;