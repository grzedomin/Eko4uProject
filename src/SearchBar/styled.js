import styled from "styled-components";

export const Section = styled.section`
  padding: 0 30px;

  @media (max-width: 767px) {
    text-align: center;
  } ;
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #454745;
`;

export const Input = styled.input`
  min-width: 30%;
  padding: 10px;
  font-size: 14px;
  border-radius: 3px;
  border: 2px solid #6e6e6e;

  @media(max-width: 767px) {
    width: 80%;
  };
`;
