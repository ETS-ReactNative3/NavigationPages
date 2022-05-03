import React, { Component } from 'react';
//import Home from './Home';
class Nav extends Component {
  render() {
    return (
      <nav>
         
          <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
          </ul>
          {/* <button>Login</button> */}
          <div className='user'>
          <p>NAGABABU</p>
          <button>Logout</button>&nbsp;
          {/* <button route={'/login'}>Login</button> */}
          {/* <a>Logout</a> */}
          </div>
           {/* <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul> */}
         {/* <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul>  */}
      </nav>
    );
  }
}

export default Nav;
