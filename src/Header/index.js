import { Clock } from "../Clock";
import logo from "../logo.svg";
import { Wrapper } from "./styled";

export const Header = () => (
  <Wrapper>
    <img src={logo} alt="Logo" />
    <Clock />
  </Wrapper>
);
