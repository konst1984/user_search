import {createBrowserRouter} from "react-router-dom";

import App from "./App";
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/user_search",
        element: <SearchPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ]
  }
])