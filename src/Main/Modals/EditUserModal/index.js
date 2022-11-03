import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editUser, selectUser, setUserSlice } from "../../Users/usersSlice";
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

export const EditUserModal = () => {
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
          <Header>Edytuj dane pracownika</Header>
        </ModalHeader>
        <FormWrapper onSubmit={onFormSubmit}>
          <Fieldset>
            <Label>
              <Title>ID:</Title>
              <Input placeholder={user.id} disabled />
            </Label>
            <Label>
              <Title>Imię:</Title>
              <Input
                placeholder="Jan"
                value={user.first_name}
                onChange={handleChange("first_name")}
                required
                type="text"
              />
            </Label>
            <Label>
              <Title>Nazwisko:</Title>
              <Input
                placeholder="Kowalski"
                value={user.last_name}
                onChange={handleChange("last_name")}
                required
                type="text"
              />
            </Label>
            <Label>
              <Title>Wiek:</Title>
              <Input
                placeholder="20"
                value={user.age}
                onChange={handleChange("age")}
                required
                type="number"
                min="18"
              />
            </Label>
            <Label>
              <Title>Ulica:</Title>
              <Input
                placeholder="Polna"
                value={user.street}
                onChange={handleChange("street")}
                required
                type="text"
              />
            </Label>
            <Label>
              <Title>Kod pocztowy:</Title>
              <Input
                placeholder="00-000"
                value={user.postal_code}
                onChange={handleChange("postal_code")}
                required
                type="text"
              />
            </Label>
            <Label>
              <Title>Miasto:</Title>
              <Input
                placeholder="Katowice"
                value={user.city}
                onChange={handleChange("city")}
                required
                type="text"
              />
            </Label>
          </Fieldset>
          <ModalFooter>
            <Link to="/Eko4uProject">
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
