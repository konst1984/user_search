import React from 'react';

import {PageLayout} from "../../components/PageLayout";
import {Login} from "../../components/Login";
import Motion from "../../components/Motion/Motion";

const LoginPage = () => {
  return (
    <Motion>
      <PageLayout href="/register" text="Or" nameLink='Register' title='login'>
        <Login />
      </PageLayout>
    </Motion>
  );
};

export default LoginPage;