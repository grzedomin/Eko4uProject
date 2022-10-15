import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid #e4e2e2;
  padding: 16px;
  background-color: #fff;
  
  border-collapse: collapse;
  font-size: 16px;
  min-width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableHead = styled.thead`
    font-weight: 600;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  &:hover{
      background-color: rgba(23,187,221,20);
      cursor: pointer;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #e4e2e2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;

  ${({ noBreakWord }) =>
    noBreakWord &&
    css`
      word-break: inherit;
    `}
  &:first-child {
    min-width: 200px;
  }
  &:nth-child(2) {
    min-width: 300px;
  }
`;

export const ButtonsCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  min-height: 30px;
  min-width: 30px;
  border: none;
  transition: 0.2s;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(110%);
    transition: 0.1s;
    
  }
  ${({ update }) =>
    update &&
    css`
      background-color: #f5a822;
      
      &:hover {
        background-color: #d99e36;
      }
    `}
  ${({ remove }) =>
    remove &&
    css`
      background-color: #f13520;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 60%;
      &:hover {
        background-color: #be3f31;
      }
    `}
`;
