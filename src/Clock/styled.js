import styled from "styled-components";

export const DateWrapper = styled.div`
  font-size: 26px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #454745;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Day = styled.h3`
  margin: 0;
`;
