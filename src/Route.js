import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';
import Navigation from './Navbar';

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Calculator">
        <Calculator />
      </Route>
      <Route path="/Quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
