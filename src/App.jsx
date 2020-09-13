import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchView from './views/search-view/SearchView';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SearchView} />
          <Route path='/details/:id' component={null} />
        </Switch>
      </Router>
    );
  }
}

export default App;
