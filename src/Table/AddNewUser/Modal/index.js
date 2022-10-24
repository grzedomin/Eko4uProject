import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearInput,
  editUser,
  selectUser,
  selectUsers,
  setSingleUser,
  setUserSlice,
} from "../../usersSlice";
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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Overlay />
      <Wrapper>
        <ModalHeader>
          <Header>Dodaj nowego pracownika</Header>
        </ModalHeader>
        <FormWrapper onSubmit={onFormSubmit}>
          <Fieldset>
            <Label>
              <Title>ID:</Title>
              <Input disabled value={user.id} />
            </Label>
            <Label>
              <Title>Imię:</Title>
              <Input
                placeholder="Jan"
                value={user.first_name}
                onChange={handleChange("first_name")}
              />
            </Label>
            <Label>
              <Title>Nazwisko:</Title>
              <Input
                placeholder="Kowalski"
                value={user.last_name}
                onChange={handleChange("last_name")}
              />
            </Label>
            <Label>
              <Title>Wiek:</Title>
              <Input
                placeholder="20"
                value={user.age}
                onChange={handleChange("age")}
              />
            </Label>
            <Label>
              <Title>Miejscowość:</Title>
              <Input
                placeholder="Polna"
                value={user.street}
                onChange={handleChange("street")}
              />
            </Label>
            <Label>
              <Title>Kod pocztowy:</Title>
              <Input
                placeholder="00-000"
                value={user.postal_code}
                onChange={handleChange("postal_code")}
              />
            </Label>
            <Label>
              <Title>Miasto:</Title>
              <Input
                placeholder="Katowice"
                value={user.city}
                onChange={handleChange("city")}
              />
            </Label>
          </Fieldset>
          <ModalFooter>
            <Link to="/">
              <Button cancel>Anuluj</Button>
            </Link>
            <Button
              save
              onClick={() => {
                dispatch(editUser(user));
              }}
            >
              Zapisz
            </Button>
          </ModalFooter>
        </FormWrapper>
      </Wrapper>
    </>
  );
};
