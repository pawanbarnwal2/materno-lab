import { FC, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import SideBar from "./Components/SideBar";
import styled from "styled-components";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Modal from "./Components/Modal";
import { Button } from "@mui/material";
import TodoContext from "./context/todo-context";

// import { BrowserRouter } from "react-router-dom";

function App(): FC {
  const [popup, setPopup] = useState(false);

  const handlePopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target.addEventListener);
    setPopup(!popup);
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <SideBar />
          {/* {popup ? <Modal show={popup} /> : null}
          <Button onClick={(e) => handlePopup(e)}>
            {popup ? "Close" : "Menu"}
          </Button> */}

          <DashBoard>
            <Header />
            <TodoContext>
              <Router />
            </TodoContext>
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
