import { Clock } from "../Clock";
import logo from "../logo.svg";
import { HeaderWrapper, Wrapper, Title } from "./styled";

export const Header = () => (
  <>
    <HeaderWrapper>
      <Wrapper>
        <img src={logo} alt="Logo" width="180px" />
        <Title>Panel administratora</Title>
      </Wrapper>
      <Clock />
    </HeaderWrapper>
  </>
);
