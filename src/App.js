import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import NavBar from "./Components/NavBar";
import Overview from "./Components/Overview";
import ViewUser from "./Components/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Overview} />
          <Route path="/Overview" exact component={Overview} />
          <Route path="/Create" exact component={CreateUser} />
          <Route path="/edit/users/:id" exact component={CreateUser} />
          <Route path="/users/:id" component={ViewUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
