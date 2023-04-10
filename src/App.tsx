import {Outlet} from "react-router-dom";

import { Container } from "./components/Container";
import { Header } from "./components/Header";


function App() {

  return (
    <>
      <Container>
        <Header />
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
