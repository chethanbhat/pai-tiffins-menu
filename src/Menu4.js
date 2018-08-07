import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Menu from './components/Menu4';
import Footer from './components/Footer'

class App extends Component {
  state = {
    images: {
      image0: "/images/slider/cc1.jpg",
      image1: "/images/slider/cc2.jpg",
      image2: "/images/slider/cc3.jpg",
      image3: "/images/slider/cc4.JPG",
      image4: "/images/slider/cc5.jpg",
      image5: "/images/slider/cc6.jpg",
    },
  };
  render() {
    return (
      <div className="App combo4">
        <Header cuisine={"Chats & Continental"} />
        <Slider images={this.state.images} />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
