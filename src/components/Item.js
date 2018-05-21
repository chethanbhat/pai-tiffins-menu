import React from 'react';

class Item extends React.Component{
    handleClick = () => {
        console.log(`You clicked ${this.props.item}`);
    }
    render(){
        const {name, price, status, category, cuisine} = this.props.details;
        if(status==="available"){
            return (
                <div className="food-item" onClick={this.handleClick}>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Item;