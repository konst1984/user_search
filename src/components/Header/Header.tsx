import React from "react";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {removeUser} from "../../store/slices/userSlice";
import {useAppDispatch} from "../../hooks/redux-hooks";
import styles from "./Header.module.scss";
import {useAuth} from "../../hooks/use-auth";

export const Header = () => {

  const {isAuth} = useAuth()
  const dispatch = useAppDispatch();

  return (
    <div className = {styles.header}>
      <div className = {styles.logo}>search engine</div>
      {isAuth && <button onClick = {() => dispatch(removeUser())} className = {styles.exit}>Log out</button>}
      <ThemeSwitcher />
    </div>
  );
}
