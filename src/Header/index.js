import logo from "../logo.svg";
import {Wrapper} from "./styled";

export const Header = () => (
  <Wrapper>
    <img src={logo} alt="Logo" />
    <p>10.10.2022 21:37</p>
  </Wrapper>
);
