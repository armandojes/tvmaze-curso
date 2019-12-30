import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Show from './pages/show';
import './styles';
import 'reset-css';

function App (){
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/show/:id" exact component={Show} />
      </Switch>
    </Fragment>
  )
}

export default App;