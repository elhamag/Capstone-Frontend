import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css'

class HomePage extends Component{
    render(){
        console.log(this.props)

        return(
            <main className="App-main1">
                <div className="App-main2">
                <br /><br /><br /><br /><br /><br /><br /><br />
                <div className="welcome-box">
                    <div className = "welcome">Welcome to Event Planner App</div>
                    <p>Events around the U.S</p>
                        <br /><br />
                        <Link to="/login" ><button className="welcome-box1">LOGIN</button></Link>
                        <Link to="/signup"><button className="welcome-box2">SIGNUP</button></Link>
                        <br /><br /><br /><br />

                        <Link to="/AllLocations"><button className="welcome-box3">GET STARTED </button></Link>
                        {/* <Link className="welcome-box3" to="/Homepage">Locations & Events around the U.S</Link>  */}
                </div>
                </div>                     
            </main>
        )
    }
}

export default HomePage;