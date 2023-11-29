

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 // const title = "welcome to the new blog";
  //const likes = 50;
  //const link ="http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="/create">
            <Create />
          </Route>
          <Route path ="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path ="*">
            <NotFound />
          </Route>
        </Switch>


        
      </div>
    </div>
    </Router>
    
  );
}

export default App;
