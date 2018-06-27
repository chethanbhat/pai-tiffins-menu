import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Menu from './components/Menu3';
import Footer from './components/Footer'

class App extends Component {
  state = {
    images: {
      image0: "/images/slider/d1.JPG",
      image1: "/images/slider/d2.JPG",
      image2: "/images/slider/d3.JPG",
      image3: "/images/slider/d4.jpg",
    },
  };
  render() {
    return (
      <div className="App combo3">
        <Header cuisine={"Beverages & Desserts"} />
        <Slider images={this.state.images} />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
