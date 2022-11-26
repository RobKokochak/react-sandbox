import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    // Router surrounds the entire app
    <Router> 
      <div className="App">
      <Navbar />
        <div className="content">
        {/* anything outside of the switch component will not change - so the Navbar will always be there no matter which page you're on */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* path="*" creates a catch-all route for any request that doesn't resolve */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
