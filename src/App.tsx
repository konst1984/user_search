import { Container } from "./components/Container";
import { Header } from "./components/Header";
import {Outlet} from "react-router-dom";


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
