import {
  TableHead,
  TableCell,
  TableRow,
  StyledTable,
  ButtonsCell,
  Button,
} from "./styled";
import { AddNewUser } from "../AddNewUser";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUserSlice, selectUsersByQuery } from "../usersSlice";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQueryParameter } from "../../../SearchBar/queryParameters";

export const Success = () => {
  const query = useQueryParameter("szukaj");
  const users = useSelector((state) => selectUsersByQuery(state, query));
  const dispatch = useDispatch();

  return (
    <>
      <AddNewUser />
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Imię</TableCell>
            <TableCell>Nazwisko</TableCell>
            <TableCell>Kod pocztowy</TableCell>
            <TableCell>Ulica</TableCell>
            <TableCell>Miasto</TableCell>
            <TableCell>Wiek</TableCell>
            <TableCell>Id</TableCell>
          </TableRow>
        </TableHead>

        {users &&
          users.map((user, myKey) => {
            return (
              <tbody key={myKey}>
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
                      <Link to={`edit-user/${user.id}`}>
                        <Button
                          update
                          onClick={() => {
                            dispatch(setUserSlice(user));
                          }}
                        >
                          <FaRegEdit /> {/*Edit icon*/}
                        </Button>
                      </Link>
                      <Button
                        remove
                        onClick={() => dispatch(removeUser(user.id))}
                      >
                        <FaTrash /> {/* Delete icon */}
                      </Button>
                    </ButtonsCell>
                  </TableCell>
                </TableRow>
              </tbody>
            );
          })}
      </StyledTable>
    </>
  );
};
