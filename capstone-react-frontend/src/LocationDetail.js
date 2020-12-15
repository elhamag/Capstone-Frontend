import React, { Component } from 'react';
import './App.css';

class LocationDetail extends Component {
    render(){
        const paramsId = parseInt(this.props.match.params.id)
        console.log(this.props)
        const locationDetail = this.props.locations.find
        (location => {
            return location.id === paramsId
        })
        console.log(locationDetail)
     const locationEvents = locationDetail.Events.map(event =>
        {
        return(
                    <tbody>
                        <tr key= {event.id} class="active-row">
                            <th>{event.name}</th>
                            <td>{event.description}</td>
                            <td>{event.location}</td>
                            <td>{event.capacity}</td>
                            <td>{event.maxCapacity}</td>
                        </tr>
                    </tbody>
        )    
     })

        return(
            <div className="locationdetails">
                <h1>{locationDetail.name}</h1>

                <h5>Edit the Event</h5>
                <form onSubmit={this.props.updateLocation}>
                    <input type="hidden" name="locationId" value={locationDetail.id} />
                    <input type="text" name="name" placeholder={locationDetail.name}/>
                    <input type="submit" value="Update Event" />
                </form>

                <h5>Add a New Event</h5>
                <form onSubmit={this.props.addEvent}>
                    <input type="hidden" name="locationId" value={locationDetail.id} />
                    <input type="text" name="name" />
                    <input type="submit" value="Add Event" />
                </form>

                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Address</th>
                            <th>Food Serve</th>
                            <th>Capacity</th>
                            <th>Maximum Capacity</th>
                        </tr>
                    </thead>
                        <tr class="active-row">{locationEvents}</tr>

            </table>
                {/* <ul>{locationEvents}</ul> */}
            </div>
        )
    }
}

export default LocationDetail;