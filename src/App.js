import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Menu from './components/Menu';

class App extends Component {
  state = {
    images: {
      image0: "/images/slider/1.jpeg",
      image1: "/images/slider/2.jpeg",
      image2: "/images/slider/3.jpg",
      image3: "/images/slider/4.jpeg",
      image4: "/images/slider/5.jpeg",
      image5: "/images/slider/6.jpg",
    },
  };
  render() {
    return (
      <div className="App">
        <Header />
          <Slider images={this.state.images} />
        <Menu cuisine={"South Indian Menu"} />
      </div>
    );
  }
}

export default App;
