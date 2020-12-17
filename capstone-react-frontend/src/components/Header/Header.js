import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import './Header.css'

class Header extends Component{
    handleLogout=async(event)=>{
        event.preventDefault();
        await this.props.logout(event)
        }
    render(){
        if (this.props.loggedIn === true) {
            return(
                <nav >
                    {/* <Link to="/"><h1 id="header-link">App</h1></Link>   
                    <Link to={`/AllLocations/${this.props.locationId}`}><h3>Profile</h3></Link> */}
                    <div className="hello" onClick={this.handleLogout} >Log out</div>
                    <Link className="hello1" to="/Homepage"> <FaHome /></Link>                  
                </nav>
            )
        } else {
            return(
                <header className="App-header">
                    {/* <Link to="/"><h1 id="header-link">Shindy</h1></Link>  
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Signup</button></Link>                      */}
                </header>
            )
        }
    }
}

export default Header;