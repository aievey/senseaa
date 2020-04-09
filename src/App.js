import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header.component'
import HomePage from './pages/home-page/home.page';
import Projects from './pages/projects/projects.page';
import Practice from './pages/practice/practice.page';
import People from './pages/people/people.page';
import Workshops from './pages/workshops/workshops.page';
import Workshop1 from './pages/workshops/workshop1.page';
import BotNav from './components/bottom-navigation/bottom-navigation.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
        <Switch>
        <Route path='/workshop1'>
        <Workshop1 />
        </Route>
        <Route path='/workshops'>
          <Workshops />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/practice'>
          <Practice />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      <BotNav />
      <Footer /> 
    </Router>
    </div>
  );
}

export default App;
