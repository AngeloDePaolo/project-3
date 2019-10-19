import React, { Component } from "react";
//import AppNavbar from './components/AppNavbar';
//import Modal from './components/Modal';
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import BetButton from './components/BetButton';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <AppNavbar /> */}
        <Container>
        {/* <Modal /> */}
        {/* <HomePage /> */}
        <BetButton></BetButton>

        </Container>
        <Footer />

    </div>
    );
  }
}

export default App;
