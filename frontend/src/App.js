import { Switch, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import SignInForm from "./components/authentication/signinform"
import SignUpForm from "./components/authentication/signupform"
import Account from "./components/account"
import ProductIndex from "./components/products/productindex";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/account/signin" component={SignInForm} />
        <Route exact path="/account/signup" component={SignUpForm} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/products" component={ProductIndex} />
      </Switch>
    </>

  );
}

export default App;
