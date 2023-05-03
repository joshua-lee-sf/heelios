import { Switch, Route } from "react-router-dom";
import NavBar from "./components/header/navbar";
import SignInForm from "./components/authentication/signinform"
import SignUpForm from "./components/authentication/signupform"
import Account from "./components/account"
import ProductIndex from "./components/products/productindex";
import ProductShow from './components/products/productshow';
import CartItemIndex from "./components/cart";
import Favorites from "./components/favorites"
import Footer from "./components/footer";


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/account/signin" component={SignInForm} />
        <Route exact path="/account/signup" component={SignUpForm} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/products" component={ProductIndex} />
        <Route exact path="/products/:id" component={ProductShow}/>
        <Route exact path="/cart" component={CartItemIndex} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/products/category/:category" component={ProductIndex} />
        <Route exact path="/"/>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
