import React from 'react';

class Slide extends React.Component{
    render(){
        return (
            <div className="slide">
                <img className="slide-img" src={this.props.src} alt={this.props.src}/>
            </div>
        )
    }
}

export default Slide;