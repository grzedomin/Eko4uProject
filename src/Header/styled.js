import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  
  @media(max-width: 767px) {
    justify-content: center;
    text-align: center;
  };
`;

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 20px;
`;

export const Title = styled.h1`
  color: #454745;
  font-size: 34px;
`;
