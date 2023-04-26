"use strict";

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const useState = React.useState;
const useEffect = React.useEffect;
// const Redirect = ReactRouterDOM.Redirect;
const Link = ReactRouterDOM.Link;
// const Prompt = ReactRouterDOM.Prompt;
// const useHistory = ReactRouterDOM.useHistory;
// const useParams = ReactRouterDOM.useParams;


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/create_account_page">
          <CreateAccountPage/>
        </Route>
        <Route path="/login_page">
          <LoginPage/>
        </Route>
        <Route path="/user_login">
          <UserProfilePage/>
      </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));