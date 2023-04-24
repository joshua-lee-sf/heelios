import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        {/* <Route exact path="/account/login" component={} /> */}
        {/* <Route exact path="/account/signup" component={} /> */}
      </Switch>
    </>

  );
}

export default App;
