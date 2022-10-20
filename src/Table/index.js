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
import { fetchUsers, selectUsers, removeUser } from "./usersSlice";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <AddNewUser isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell header>Imię</TableCell>
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
                        <FaRegEdit /> {/*Edit icon*/}
                      </Button>
                      <Button
                        remove
                        onClick={() => dispatch(removeUser(user.id))}
                      >
                        <FaTrash /> {/* Delete icon */}
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
