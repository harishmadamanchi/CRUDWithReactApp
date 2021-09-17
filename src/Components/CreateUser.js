import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function CreateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const history = useHistory();

  useEffect(() => {
    setName("");
    setEmail("");
    setMobile("");
    if (id) {
      axios
        .get(`https://6141f8ea4d16670017ba2aea.mockapi.io/users/${id}`)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setMobile(response.data.mobile);
        })
        .catch((err) => alert(err));
    }
  }, [id]);

  const onSubmitHandler = (e) => {
    if (e.target.innerText === "UPDATE") {
      updateHandler();
    } else if (e.target.innerText === "CREATE") {
      createHandler();
    }
  };

  const updateHandler = () => {
    axios
      .put(`https://6141f8ea4d16670017ba2aea.mockapi.io/users/${id}`, {
        name: name,
        email: email,
        mobile: mobile,
      })
      .then((response) => {
        history.push("/Overview");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createHandler = () => {
    axios
      .post("https://6141f8ea4d16670017ba2aea.mockapi.io/users", {
        name: name,
        email: email,
        mobile: mobile,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          console.log("inside");
          history.push("/Overview");
        }
      });
  };

  return (
    <div className="viewContainer">
      <header>{id ? "Update" : "Create"} User</header>
      <form>
        <Grid container>
          <Grid item xs={3}>
            <TextField
              id="name"
              variant="outlined"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="email"
              variant="outlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="mobile"
              variant="outlined"
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={onSubmitHandler}
            >
              {id ? "Update" : "Create"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
