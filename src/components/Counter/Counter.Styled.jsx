// CounterStyles.js
import styled from "@emotion/styled";

export const CounterContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 400px;
`;

export const CounterValue = styled.span`
  font-size: 2rem;
  margin-bottom: 20px;
  display: block;
`;

export const ControlersBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const CounterControls = styled.button`
  padding: 5px 15px;
  background-color: #c2c9d6;
  border: 1px dashed #ccc; // Corrected border style
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
`;
