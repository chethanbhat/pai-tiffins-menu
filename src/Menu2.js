import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Menu from './components/Menu2';
import Footer from './components/Footer'

class App extends Component {
  state = {
    images: {
      image0: "/images/slider/nc1.jpg",
      image1: "/images/slider/nc2.jpg",
      image2: "/images/slider/nc3.jpg",
      image3: "/images/slider/nc4.jpg",
    },
  };
  render() {
    return (
      <div className="App combo2">
        <Header cuisine={"North Indian & Chinese"} />
        <Slider images={this.state.images} />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
