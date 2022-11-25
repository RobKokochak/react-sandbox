import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // Router surrounds the entire app
    <Router> 
      <div className="App">
      <Navbar />
        <div className="content">
        {/* anything outside of the switch component will not change - so the Navbar will always be there no matter which page you're on */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
