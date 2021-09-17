import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import "../App.css";

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://6141f8ea4d16670017ba2aea.mockapi.io/users/${id}`)
      .then((responseData) => {
        setUserDetails(responseData.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const goToBackHandler = () => {
    history.push("/");
  };

  return (
    <>
      <div className="viewContainer">
        <header>User Details</header>
        <h3>Name : {userDetails.name}</h3>
        <h3>Email : {userDetails.email}</h3>
        <h3>Mobile : {userDetails.mobile}</h3>
      </div>
      <Button color="primary" variant="contained" onClick={goToBackHandler}>
        Back
      </Button>
    </>
  );
}
