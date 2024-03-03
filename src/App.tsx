import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import SideBar from "./Components/SideBar";
import styled from "styled-components";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// import { BrowserRouter } from "react-router-dom";

function App() {
  //   const [count, setCount] = usestate(0);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <SideBar />
          <DashBoard>
            <Header />
            <Router />
          </DashBoard>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
`;

const DashBoard = styled.div`
  background-color: white;
`;
