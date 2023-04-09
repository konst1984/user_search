import React from 'react';
import {SignUp} from "../../SignUp";
import PageLayout from "../../PageLayout/PageLayout";


const RegisterPage = () => {
  return (
    <PageLayout href="/login" text="Already have an account?" nameLink="Sign in" title='register'>
      <SignUp />
    </PageLayout>
  );
};

export default RegisterPage;