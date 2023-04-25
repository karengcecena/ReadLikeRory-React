const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
// const Redirect = ReactRouterDOM.Redirect;
// const Link = ReactRouterDOM.Link;
// const Prompt = ReactRouterDOM.Prompt;
// const useHistory = ReactRouterDOM.useHistory;
// const useParams = ReactRouterDOM.useParams;

// import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));