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
        // console.log(locationDetail)
     const locationEvents = locationDetail.Events.map(event =>
        {
        return(
                    <tbody>
                        <tr key= {event.id} class="active-row">
                            <td className="th7">{event.name}</td>
                            <td className="th8">{event.description}</td>
                            <td className="th9">{event.location}</td>
                            <td className="th10">{event.capacity}</td>
                            <td className="th11">{event.maxCapacity}</td>
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
                            <th >Name</th>
                            <th className="th2">Description</th>
                            <th className="th3">Address</th>
                            <th className="th5">Capacity</th>
                            <th className="th6">Maximum Capacity</th>
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