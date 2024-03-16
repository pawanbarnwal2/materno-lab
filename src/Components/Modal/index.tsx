import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const navItem = [
  { id: 1, name: "Home Page", href: "/" },
  { id: 2, name: "About", href: "/about" },
];

function Modal(props) {
  const content = (
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left">
      <Container>
        <header>
          <div>Logo</div>
          <Divider />
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {navItem.map((i) => (
            <Link style={{ backgroundColor: "sky-blue" }} to={i.href}>
              {i.name}
            </Link>
          ))}
        </div>
      </Container>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("side-bar"));
}

export default Modal;

const Container = styled.aside`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  zindex: 100;
  height: 100vh;
  width: 15%;
  background: grey;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
