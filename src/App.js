import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header.component'
import HomePage from './pages/home-page/home.page';
import BotNav from './components/bottom-navigation/bottom-navigation.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
        <Route path='/'>
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
