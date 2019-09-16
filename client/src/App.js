import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main'

export default function App() {
    return (
          <Router>
            <div>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
            </div>
          </Router>
      )
    }