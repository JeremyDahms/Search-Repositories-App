import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsView from './views/details-view/DetailsView';
import SearchView from './views/search-view/SearchView';
import styled from 'styled-components';

const AppView = styled.div`
  padding-top: 8vh;
  padding-left: 8vh;
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <AppView>
        <Router>
          <Switch>
            <Route exact path='/' component={SearchView} />
            <Route
              path='/details/:id'
              render={(props) => <DetailsView {...props} />}
            />
          </Switch>
        </Router>
      </AppView>
    );
  }
}

export default App;
