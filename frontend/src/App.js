function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Switch>
        <Route exact path="/" component={splashpage} />
        <Route path="/accounts/login" component={AccountLogInForm} />
        <Route exact path="/accounts/signup" component={AccountSignUpForm} />
      </Switch>
    </>

  );
}

export default App;
