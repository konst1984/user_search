import React from 'react';
import {PageLayout} from "../../PageLayout";
import {Login} from "../../Login";

const LoginPage = () => {
  return (
    <PageLayout href="/register" text="Or" nameLink='Register' title='login'>
      <Login />
    </PageLayout>
  );
};

export default LoginPage;