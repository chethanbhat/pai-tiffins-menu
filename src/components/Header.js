import React from 'react';

class Header extends React.Component{
    render(){
        return (
          <div className="main-header">
              <div className="cuisine">
                <h1>{this.props.cuisine} <img className="veg-mark" src="/images/veg-mark.png" alt="Veg Mark"/> </h1>
              </div>
            <div className="logo">
              <img src="/images/logo.png" alt="Pai Tiffins Logo"/>
            </div>       
          </div>
        )
    }
}

export default Header;