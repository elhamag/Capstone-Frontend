import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

class Login extends Component{
    handleLogin = (event) => {
        event.preventDefault()
        this.props.login(event)
        this.props.history.push("/AllLocations")
    }

    render(){
        const allUsers = this.props.users;
        
        return(
            <div className="login">
                <div className="login1">
                <div className="container">
                <div className="login-container" >
                <div>Login</div>
                <br /><br />
                    <form onSubmit={this.handleLogin} className="form-group">
                    <div class="input-container">
                    <div class="input-container1"><FaUser /></div> 
                    <input type="text" name="username" placeholder="Username"/><br/>
                    </div>
                    
                    <div class="input-container">
                    <div class="input-container1"><FaKey /></div>
                    <input type="text" name="password" placeholder="*******"/><br/>
                    </div>

                    <input type="hidden" name="loggedIn" value="true"/><br/>

                    {/* <!-- Submit button --> */}
                
                    <input id="submit"  type="submit" value="Login" />
                    </form>

                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;