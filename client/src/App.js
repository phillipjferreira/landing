import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';

// Components
import Landing from './views/Landing';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import 'react-slideshow-image/dist/styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Landing} layout={LayoutDefault} />
      </Switch>
    </Router>
  );
}

export default App;
