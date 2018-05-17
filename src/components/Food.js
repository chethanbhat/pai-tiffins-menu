import React from 'react';

class Food extends React.Component{
    render(){
        return <h3>{this.props.category}</h3>
    }
}

export default Food;