import { Container, StyledSpinner, LoadingInfo } from "./styled";

export const Loading = () => (
  <>
    <Container>
      <LoadingInfo>Ładowanie użytkowników</LoadingInfo>
      <StyledSpinner />
    </Container>
  </>
);
