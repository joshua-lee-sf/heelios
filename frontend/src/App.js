import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import SignInForm from "./components/loginform/LoginForm";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/account/login" component={SignInForm} />
        {/* <Route exact path="/account/signup" component={} /> */}
      </Switch>
    </>

  );
}

export default App;
