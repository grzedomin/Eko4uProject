import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid #e4e2e2;
  padding: 16px;
  background-color: #fff;
  border-collapse: collapse;
  font-size: 16px;
`;

export const TableHead = styled.thead`
  font-weight: 600;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #e4e2e2;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  text-align: center;
`;

export const ButtonsCell = styled.div`
  @media (max-width: 990px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  padding: 0.65rem 0.8rem;
  border: none;
  transition: 0.2s;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  margin: 0 5px;

  @media (max-width: 990px) {
    padding: 0.3rem 0.5rem;
  }

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
