import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Menu from './components/Menu2';
import Footer from './components/Footer'

class App extends Component {
  state = {
    images: {
      image0: "/images/slider/1.jpg",
      image1: "/images/slider/2.jpg",
      image2: "/images/slider/3.jpg",
      image3: "/images/slider/4.JPG",
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
