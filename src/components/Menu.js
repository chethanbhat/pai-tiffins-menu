import React from 'react';
import Cuisine from './Cuisine';
import Food from './Food';
import Item from './Item';
import '../App.css';

class Menu extends React.Component{
    render(){
        return (
          <div className="menu">
            <Cuisine title="South Indian" />
            <div className="main-menu">
            <div className="categories">
              <div className="category">
                <Food category="Snacks"/>
                <Item item="Idli Sambar" price="Rs 40" />
                <Item item="Idli vada" price="Rs 35" />
                <Item item="Khotto/Kottige" price="Rs 35" />
                <Item item="Semige" price="Rs 30" />
                <Item item="Upma" price="Rs 35" />
                <Item item="Puri Bhaji" price="Rs 55" />
                <Item item="Poha" price="Rs 35" />
                <Item item="Sambar Vada" price="Rs 55" />
                <Item item="Fried Idli" price="Rs 40" />
                <Item item="Dahi Vada" price="Rs 40" />
              </div>
              <div className="category">
                <Food category="Dosas" />
                <Item item="Plain Dosa" price="Rs 20" />
                <Item item="Onion Dosa" price="Rs 30" />
                <Item item="Masala Dosa" price="Rs 40" />
                <Item item="Paper Dosa" price="Rs 50" />
                <Item item="Tuppa Dosa" price="Rs 25" />
                <Item item="Set Dosa" price="Rs 30" />
                <Item item="Neer Dosa" price="Rs 20" />
                <Item item="Rava Dosa" price="Rs 25" />
                <Item item="Onion Uthappam" price="Rs 30" />
              </div>
              <div className="category">
                <Food category="Evening Snacks" />
                <Item item="Medu Vada" price="Rs 20" />
                <Item item="Dal Vada" price="Rs 25" />
                <Item item="Onion Pakoda" price="Rs 30" />
                <Item item="Mangalore Buns" price="Rs 20" />
                <Item item="Masala Vada" price="Rs 30" />
                <Item item="Biscuit Roti" price="Rs 10" />
                <Item item="Goli Bhaje" price="Rs 35" />
                <Item item="Mysore Bonda" price="Rs 25" />
                <Item item="Bread Bonda" price="Rs 25" />
              </div>
            </div>
            </div>
          </div>
        )
    }
}

export default Menu;