import {
  Overlay,
  Wrapper,
  ModalHeader,
  Header,
  FormWrapper,
  Fieldset,
  Button,
  ModalFooter,
  Label,
  Title,
  Input,
} from "./styled";

export const Modal = ({ setIsOpen }) => {
  return (
    <>
      <Overlay />
      <Wrapper>
        <ModalHeader>
          <Header>Dodaj nowego pracownika</Header>
        </ModalHeader>
        <FormWrapper>
          <Fieldset>
            <Label>
              <Title>Imię:</Title>
              <Input placeholder="Jan" />
            </Label>
            <Label>
              <Title>Nazwisko:</Title>
              <Input placeholder="Kowalski" />
            </Label>
            <Label>
              <Title>Wiek:</Title>
              <Input placeholder="20" />
            </Label>
            <Label>
              <Title>Miejscowość:</Title>
              <Input placeholder="Pawłowice" />
            </Label>
            <Label>
              <Title>Kod pocztowy:</Title>
              <Input placeholder="00-000" />
            </Label>
            <Label>
              <Title>Miasto:</Title>
              <Input placeholder="Katowice" />
            </Label>
          </Fieldset>
          <ModalFooter>
            <Button cancel onClick={() => setIsOpen(false)}>
              Anuluj
            </Button>
            <Button save>Zapisz</Button>
          </ModalFooter>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
