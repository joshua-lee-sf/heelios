import { Switch, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import SignInForm from "./components/authentication/signinform"
import SignUpForm from "./components/authentication/signupform"
import Account from "./components/account"
import ProductIndex from "./components/products/productindex";
import ProductShow from './components/products/productshow';
import CartItemIndex from "./components/cart/cartitemindex";
import Footer from "./components/footer";

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
        <Route exact path="/products/:id" component={ProductShow}/>
        <Route exact path="/cart" component={CartItemIndex} />
      </Switch>
      <Footer />
    </>

  );
}

export default App;
