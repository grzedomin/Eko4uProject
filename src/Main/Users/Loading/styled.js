import styled, { keyframes } from "styled-components";
import { ReactComponent as IconSpinner } from "./icon-spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledSpinner = styled(IconSpinner)`
  animation: ${rotate} 1s linear infinite;
`;

export const LoadingInfo = styled.p`
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  margin-top: 88px;
  margin-bottom: 48px;
  color: #454745;
`;
