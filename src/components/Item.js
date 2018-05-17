import React from 'react';

class Item extends React.Component{
    render(){
        return (
        <div className="food-item">
            <p>{this.props.item}</p>
            <p>{this.props.price}</p>
        </div>
        )
    }
}

export default Item;