import React, {useEffect, useState} from 'react';
import {GitHubError, GitHubUser, LocalGithubUser} from "../../../types";
import {defaultUser} from "../../../mock";
import {isGitHubUser} from "../../../utils/typeGuards";
import {extractLocalUser} from "../../../utils/extract-local-user";
import {Search} from "../../Search";
import {UserCard} from "../../UserCard";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/use-auth";
import styles from "./SearchPage.module.scss";

const BASE_URL = "https://api.github.com/users/";

const SearchPage = () :  null | JSX.Element => {

  let navigate =useNavigate();


  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const {isAuth}= useAuth()

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
    if(!isAuth){
      navigate('/login')
    }
  })

  return isAuth ? (
    <>
      <h1 className={styles.title} >Welcome</h1>
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </>
  ) : null;
};

export default SearchPage;