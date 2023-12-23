import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  padding: 25px;
`;

export const Logo = styled.div`
  width: 140px;
  height: 26.377px;
  flex-shrink: 0;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageSwitcher = styled.select`
  margin-right: 20px;
  font-size: 14px;
  background-color: transparent;
  border-radius: 4px;
  color: white;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
`;

export const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  width: 20px;
  height: 19px;
  flex-shrink: 0;
`;
