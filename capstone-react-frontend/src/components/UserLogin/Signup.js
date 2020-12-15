import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

class Signup extends Component{
    render(){
      const allUsers = this.props.users;
      
        return(
          <main class="signup">
            < div className="login1">
            <div className="container">
            <div className="login-container" >
            <div>Register Form </div>
            < br /><br />
            
            {/* <!-- Sign-up Info --> */}
            <form className="form-group">
                <div class="input-container">
                <div class="input-container1"><FaUser /></div>           
                <input type="text" name="username" placeholder="Username"/><br/>
                </div>
                <div class="input-container">
                <div class="input-container1"><FaEnvelope /></div>
                <input type="text" name="email" placeholder="Email"/><br/>
                </div>

                <div class="input-container">
                <div class="input-container1"><FaKey /></div>
                <input type="text" name="password" placeholder="*******"/><br/>
                </div>
                <input type="hidden" name="loggedIn" value="true"/><br/>
                
            
            <input id="submit"  type="submit" value="Register" />
            </form>
            </div>
            </div>
            </div>
          </main>
        )
    }
}

export default Signup;