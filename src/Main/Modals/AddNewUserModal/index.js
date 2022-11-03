import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addNewUser,
  clearInput,
  selectUser,
  setUserSlice,
  showModal,
} from "../../Users/usersSlice";
import {
  Overlay,
  Wrapper,
  ModalHeader,
  Header,
  Fieldset,
  Button,
  ModalFooter,
  Label,
  Title,
  Input,
} from "./styled";

export const AddNewUserModal = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const buttonSubmit = () => {
    dispatch(addNewUser(user));
    dispatch(clearInput());
  };

  return (
    <>
      <Overlay />
      <Wrapper>
        <ModalHeader>
          <Header>Dodaj nowego pracownika</Header>
        </ModalHeader>
        <form onSubmit={onFormSubmit}>
          <Fieldset>
            <Label>
              <Title>ID:</Title>
              <Input
                placeholder="1"
                value={user.id}
                onChange={handleChange("id")}
                required
                type="number"
                min="1"
                id="id"
              />
            </Label>
            <Label>
              <Title>Imię:</Title>
              <Input
                placeholder="Jan"
                value={user.first_name}
                onChange={handleChange("first_name")}
                required
                type="text"
                id="first_name"
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
                id="last_name"
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
                id="age"
              />
            </Label>
            <Label>
              <Title>Miejscowość:</Title>
              <Input
                placeholder="Polna"
                value={user.street}
                onChange={handleChange("street")}
                required
                type="text"
                id="street"
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
                id="postal_code"
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
                id="city"
              />
            </Label>
          </Fieldset>
          <ModalFooter>
            <Link to="/Eko4uProject">
              <Button cancel>Anuluj</Button>
            </Link>
            <Link to="/Eko4uProject">
              <Button save type="submit" onClick={buttonSubmit}>
                Dodaj
              </Button>
            </Link>
          </ModalFooter>
        </form>
      </Wrapper>
    </>
  );
};
