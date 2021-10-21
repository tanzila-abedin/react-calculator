import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Wrapper">
        <App />
      </Route>
      <Route path="/Quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
