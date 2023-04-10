import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {GitHubError, GitHubUser, LocalGithubUser} from "../../types";
import {defaultUser} from "../../mock";
import {isGitHubUser} from "../../utils/typeGuards";
import {extractLocalUser} from "../../utils/extract-local-user";
import {Search} from "../../components/Search";
import {UserCard} from "../../components/UserCard";
import {useAuth} from "../../hooks/use-auth";
import Motion from "../../components/Motion/Motion";

import styles from "./SearchPage.module.scss";

const BASE_URL = "https://api.github.com/users/";

const SearchPage = (): null | JSX.Element => {

  let navigate = useNavigate();


  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const {isAuth} = useAuth()

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as GitHubUser | GitHubError;
    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  return isAuth ? (
    <Motion>
      <h1 className = {styles.title}>Welcome</h1>
      <Search hasError = {!user} onSubmit = {fetchUser} />
      {user && <UserCard {...user} />}
    </Motion>
  ) : null;
};

export default SearchPage;