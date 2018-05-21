import React from 'react';

class Item extends React.Component{
    handleClick = () => {
        console.log(`You clicked ${this.props.item}`);
    }
    render(){
        return (
        <div className="food-item" onClick={this.handleClick}>
            <p>{this.props.item}</p>
            <p>{this.props.price}</p>
        </div>
        )
    }
}

export default Item;