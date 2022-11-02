import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddNewUserButton = styled.button`
  border: none;
  padding: 20px;
  border-radius: 5px;
  color: #fff;
  background-color: #005799;
  font-size: 15px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #2e8ad0;
  }

  @media (max-width: 767px) {
    margin-top: 26px;
    padding: 15px;
    font-size: 14px;
    font-weight: 400;
  } ;
`;
