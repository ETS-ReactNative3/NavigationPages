import React from "react";
// import Home from './Home';
import { Component } from "react/cjs/react.production.min";

class Home extends Component {
    render() {
        return <div>
            <h3>Login page</h3>
            <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
        </div>
    }
}
export default Home;