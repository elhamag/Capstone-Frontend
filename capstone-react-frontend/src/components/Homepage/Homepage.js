import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css'

class HomePage extends Component{
    render(){
        console.log(this.props)

        return(
            <main className="App-main1">
            <h1>Homepage</h1>
            
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
                <br /><br /><br /><br />
                <Link to="/Homepage">All Location</Link>                      
            </main>
        )
    }
}

export default HomePage;