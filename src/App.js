import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage';
import PeoplePage from './pages/people.page';
import PeopleDetailPage from './pages/people.detail.page';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/people" component={PeoplePage}/>
          <Route path="/people/:personId" component={PeopleDetailPage}/>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
