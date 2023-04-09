import React, {FC,ReactNode} from 'react';
import styles from "./PageLayout.module.scss";
import {Link} from "react-router-dom";

interface IPageLayoutProps {
  children: ReactNode,
  href: string,
  text: string,
  title:string,
  nameLink:string
}

const PageLayout:FC<IPageLayoutProps> = ({children, href, text,title,nameLink}) => {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      {children}
      <p>
        {text} <Link className={styles.link} to= {href}>{nameLink}</Link>
      </p>
    </div>
  );
};

export default PageLayout;