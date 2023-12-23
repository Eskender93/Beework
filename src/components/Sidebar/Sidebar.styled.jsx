import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 340px;
  height: 100%;
  background-color: #f4f4f4;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Приклад стилів */
  /* Додайте інші стилі за бажанням */
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const Link = styled.a``;
