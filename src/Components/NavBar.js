import React from "react";
import { AppBar, Button, Container, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();

  const goToHomeHandler = () => {
    console.log("goToHomeHandler");
    history.push("/");
  };

  const goToCreateHandler = () => {
    history.push("/create");
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar className="toolBar">
          <Typography onClick={goToHomeHandler} variant="h6" component="div">
            CRUD
          </Typography>
          <div>
            <Button onClick={goToHomeHandler} color="inherit">
              Overview
            </Button>
            <Button onClick={goToCreateHandler} color="inherit">
              Create
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
