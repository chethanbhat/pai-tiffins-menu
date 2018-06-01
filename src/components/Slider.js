import React from 'react';
import Slide from './Slide'

class Slider extends React.Component{
    state = {
        currentSlide: 1
    };
    change = () => {
        const slide = this.state.currentSlide;
        const count = Object.keys(this.props.images).length;
        const currentSlide = (slide+1)%count;
        this.setState({currentSlide : currentSlide});
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.change(),5000);
    }   
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return (
            <div className="slides" >
            { this.state.currentSlide === 0? <Slide src={this.props.images.image0} /> : null}
            { this.state.currentSlide === 1? <Slide src={this.props.images.image1} /> : null}
            { this.state.currentSlide === 2? <Slide src={this.props.images.image2} /> : null}
            { this.state.currentSlide === 3? <Slide src={this.props.images.image3} /> : null}
            { this.state.currentSlide === 4? <Slide src={this.props.images.image4} /> : null}
            { this.state.currentSlide === 5? <Slide src={this.props.images.image5} /> : null}
            </div>

        )
    }
}

export default Slider;