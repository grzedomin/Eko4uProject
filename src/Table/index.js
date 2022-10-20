import {
  TableHead,
  TableCell,
  TableRow,
  StyledTable,
  ButtonsCell,
  Button,
} from "./styled";
import { useEffect, useState } from "react";
import { AddNewUser } from "./AddNewUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "./usersSlice";

export const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  // const removeUser = (id) => {
  //   client.delete(`https://fronttest.ekookna.pl/user/${id}`);
  //   const newUsers = users.filter((user) => user.id !== id);
  //   console.log(newUsers);
  //   setUsers(newUsers);
  // };

  return (
    <>
      <AddNewUser isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Imię</TableCell>
            <TableCell>Nazwisko</TableCell>
            <TableCell>Kod pocztowy</TableCell>
            <TableCell>Miejscowość</TableCell>
            <TableCell>Miasto</TableCell>
            <TableCell>Wiek</TableCell>
            <TableCell>Id</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.postal_code}</TableCell>
                  <TableCell>{user.street}</TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <ButtonsCell>
                      <Button update onClick={() => setIsOpen(true)}>
                        Edytuj
                      </Button>
                      <Button remove /*onClick={() => removeUser(user.id)}*/>
                        Usuń
                      </Button>
                    </ButtonsCell>
                  </TableCell>
                </TableRow>
              );
            })}
        </tbody>
      </StyledTable>
    </>
  );
};
