import React from "react";
import {
  StyledSidebar,
  CloseButton,
  ListItem,
  List,
  Link,
} from "./Sidebar.styled";
import { IoMdCloseCircle } from "react-icons/io";

const Sidebar = ({ isOpen, closeMenu }) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <List>
        <ListItem onClick={closeMenu}>
          <Link to="/series">Серіал</Link>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <Link to="/tariffs">Тарифи</Link>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <Link to="/location">Локація</Link>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <Link to="/meetings">Зустрічі та події</Link>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <Link to="/gallery">Фотогалерея</Link>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <Link to="/contacts">Контакти</Link>
        </ListItem>
      </List>
      <CloseButton onClick={closeMenu}>
        <IoMdCloseCircle />
      </CloseButton>
    </StyledSidebar>
  );
};

export default Sidebar;
