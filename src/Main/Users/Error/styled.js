import styled from "styled-components";
import { ReactComponent as Icon } from "./error-icon.svg";

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h3`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 24px 0px;
  color: #454745;
`;

export const ErrorIcon = styled(Icon)``;
