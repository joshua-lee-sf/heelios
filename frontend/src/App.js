import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import SignInForm from "./components/signinform";
import SignUpForm from "./components/signupform";
import Account from "./components/account";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/account/signin" component={SignInForm} />
        <Route exact path="/account/signup" component={SignUpForm} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </>

  );
}

export default App;
