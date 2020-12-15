import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AllLocations extends Component {
    
    render(){
        console.log(this.props.locations)
        const AllLocations = this.props.locations.map(location => {
            return(
                <li key={location.id}>
                    <Link to={`/locations/${location.id}`}>{location.name}</Link>
                    <button
                        key = {location.id}
                        id = {location.id}
                        onClick = {this.props.deleteLocation}
                    >                    
                        Delete
                    </button>
                </li>
            )
        })

        return(
            <div className="alllocations">
                <div className="alllocations-font">All Locations</div>
                <form onSubmit={this.props.addLocation} >
                    <input type="text" name="name" />
                    <input type="submit" value="Add Location" />
                </form>
                {AllLocations}
            </div>
        )
    }
}

export default AllLocations;

