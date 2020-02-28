import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
import ViewUser from "./components/users/viewUser";

const App = ({ location }) => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Route location={location} path="/" exact component={Landing} />
        <Route location={location} path="/view-users" exact component={ViewUser} />
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default App;
