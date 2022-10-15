import {
  TableHead,
  TableCell,
  TableRow,
  StyledTable,
  ButtonsCell,
  Button,
} from "./styled";
import { useFetchData } from "./useFetchData";
import axios from "axios";
import { useEffect, useState } from "react";
import { AddNewUser } from "./AddNewUser";

export const Table = () => {
  const [users, setUsers] = useState(null);

  const client = axios.create({
    baseURL: "https://fronttest.ekookna.pl/",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await client.get();
        setUsers(response.data.users);
      } catch (error) {
        console.log(error, "ERRORRIX");
      }
    };
    fetchUsers();
  }, []);

  const removeUser = (id) => {
    client.delete(`https://fronttest.ekookna.pl/user/${id}`);
    const newUsers = users.filter((user) => user.id !== id);
    console.log(newUsers);
    setUsers(newUsers);
  };

  return (
    <>
      <AddNewUser />
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
                  <ButtonsCell>
                    <Button update>Edytuj</Button>
                    <Button remove onClick={() => removeUser(user.id)}>
                      Usuń
                    </Button>
                  </ButtonsCell>
                </TableRow>
              );
            })}
        </tbody>
      </StyledTable>
    </>
  );
};
