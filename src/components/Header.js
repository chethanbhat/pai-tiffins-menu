import React from 'react';

class Header extends React.Component{
    render(){
        return (
          <div className="main-header">
            <div className="brand">
              <h1>Pai Tiffins Pvt. Ltd</h1>
              <p>Manipal Commercial Complex <br />
                 Manipal 576104, Udupi Dist. <br />
                 Ph: 777-7777777
              </p>
            </div>
            <div className="logo">
              <img src="/images/logo.png" alt="Pai Tiffins Logo"/>
            </div>
            
          </div>
        )
    }
}

export default Header;