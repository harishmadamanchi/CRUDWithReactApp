import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";

export default function Overview() {
  const history = useHistory();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const fetchDataHandler = () => {
    axios
      .get("https://6141f8ea4d16670017ba2aea.mockapi.io/users")
      .then((responseData) => {
        setUsersData(responseData.data);
      })
      .catch((err) => console.log(err));
  };

  const viewHandler = (id) => {
    history.push(`/users/${id}`);
  };

  const editHandler = (id) => {
    history.push(`/edit/users/${id}`);
  };

  const deleteHandler = (id) => {
    axios
      .delete(`https://6141f8ea4d16670017ba2aea.mockapi.io/users/${id}`)
      .then((response) => {
        fetchDataHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container maxWidth="lg">
        <TableContainer justify="center">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => viewHandler(user.id)}>
                      <VisibilityIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => editHandler(user.id)}>
                      <EditIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => deleteHandler(user.id)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
