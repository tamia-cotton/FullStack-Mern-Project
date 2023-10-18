import Main from "./views/Main"
import Edit from "./views/Edit"
import New from "./views/New"
import Details from "./views/Details.js"
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (<div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Main></Main>
          </Route>
          <Route exact path="/new">
            <New></New>
          </Route>
          <Route exact path="/edit/:_id">
            <Edit></Edit>
          </Route>
          <Route exact path="/details/:_id">
          <Details></Details>
          </Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
