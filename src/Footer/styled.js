import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./githubIcon.svg";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #454745;

  &:hover {
    border-bottom: 1px solid #454745;
  }
`;

export const Icon = styled(GitHubIcon)``;
