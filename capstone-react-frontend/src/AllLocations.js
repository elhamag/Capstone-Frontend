import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AllLocations extends Component {
    
    render(){
        // console.log(this.props.locations)
  
        const AllLocations = this.props.locations.map(location => {
            return(
                <li key={location.id}  className="delete-button">
                    <Link to={`/locations/${location.id}`}>{location.name}</Link>
                    {
                        this.props.loggedIn ? 
                        
                        <button className="delete-button1"
                        key = {location.id}
                        id = {location.id}
                        onClick = {this.props.deleteLocation}
                        >                    
                        Delete
                    </button> : null
                        
                    }                    
                </li>
            )
        })

        return(            
            <div className="alllocations">
                <div className="alllocations-font">All Recent Events</div>
                <form className="alllocations3" onSubmit={this.props.addLocation} >
                    <input className="alllocations5" type="text" name="name" />
                    <input className="alllocations2" type="submit" value="Add Location" />
                </form>
                {AllLocations}
                <br /><br /><br /><br /><br /><br />
                <Link className="link" to="/">Home Page</Link>
                
                <div><img src="https://visitmontgomery.com/wp-content/uploads/2018/05/Jefferson-Cherry-Blossom.jpg" className="img11"></img></div>
                <div><img src="https://i.pinimg.com/564x/d7/05/8c/d7058c08734530b2e8a1ec5b41190561.jpg" className="img1"></img></div>
                <div><img src="https://i.pinimg.com/564x/5d/93/e4/5d93e462c5b000a10bb9799878f4b6fa.jpg" className="img2"></img></div>
                <div><img src="https://i.pinimg.com/564x/2f/f0/85/2ff08565a6ebbe738232729f9183d5ee.jpg" className="img3"></img></div>
                <div><img src="https://i.pinimg.com/564x/f8/10/ae/f810aebf04a7a06aedc400cca52a3d45.jpg" className="img4"></img></div>
                <div><img src="https://i.pinimg.com/564x/69/c0/0e/69c00eeb5c6c2ad33ebd8475ebe0dc2f.jpg" className="img5"></img></div>
                <div><img src="https://i.pinimg.com/564x/7e/97/7c/7e977c2c412f40b884cd7a7f3b76e2da.jpg" className="img6"></img></div>
                <div><img src="https://i.pinimg.com/originals/61/60/ca/6160ca86cff796a59b30b4edd37c860c.jpg" className="img7"></img></div>
                <div><img src="https://i.pinimg.com/474x/da/9d/6e/da9d6e2abff171268d870090a38196df.jpg" className="img8"></img></div>
                <div><img src="https://i.pinimg.com/236x/51/26/ff/5126ffaaf04792e2ab581420ba7f1778.jpg" className="img9"></img></div>
                <div><img src="https://i.pinimg.com/474x/f1/03/ac/f103acb7bb08958c8a838d06318e2888.jpg" className="img10"></img></div>
                
            </div>
        )
    }
}

export default AllLocations;

