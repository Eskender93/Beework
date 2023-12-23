import React from "react";
import {
  StyledHeader,
  Logo,
  ControlsContainer,
  LanguageSwitcher,
  MenuIcon,
  StyledHamburgerMenu,
} from "./Header.styled";
import ReactLogo from "./image/logo192.svg";

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <Logo>
        <img src={ReactLogo} alt="React Logo" />{" "}
      </Logo>
      <ControlsContainer>
        <LanguageSwitcher>
          <option value="UA">UA</option>
          <option value="EN">EN</option>
        </LanguageSwitcher>{" "}
        <MenuIcon onClick={toggleSidebar}>
          <StyledHamburgerMenu />
        </MenuIcon>
      </ControlsContainer>
    </StyledHeader>
  );
};

export default Header;
