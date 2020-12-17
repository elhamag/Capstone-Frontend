import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import AllLocations from './AllLocations';
import LocationDetail from './LocationDetail'
import Homepage from './components/Homepage/Homepage'
import Login from './components/UserLogin/Login'
import Signup from './components/UserLogin/Signup'
import Footer from './components/Footer/Footer'
import { FaUser } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import Header from './components/Header/Header'


const backendUrl = "https://elhamproject4.herokuapp.com/api"

class App extends Component {
constructor(){
  super()
  
  this.state = {
    users: {},
    locations: [],
    userId: null,
    iplocation: '',
    loggedIn:false
  }
}

componentDidMount = () => {
  this.getUsers();
  this.getLocations()
}

getUsers= async()=>{
  const response = await axios(`${backendUrl}/users`)
  this.setState({
    users: response.data.allUsers
  })
}


getLocations = async() => {
  console.log("calling get location")
  const response = await axios(`${backendUrl}/locations`)
  this.setState({
    locations: response.data.allLocations
  })
  
}

addLocation = async (event) => {
  event.preventDefault()
  let response = await axios.post(
    `${backendUrl}/locations`,
    {
      name: event.target.name.value
    })
    this.setState({
  })
const location = this.state
  this.getLocations(location)
}



addEvent = async (event) => {
  console.log("calling  location")
  event.preventDefault()
  let locationId = event.target.locationId.value
  
  await axios.post(
    `${backendUrl}/locations/${locationId}/newEvent`,{
    name: event.target.name.value,
    locationId: locationId
  })
  this.getLocations()
}

updateLocation = async (event) => {
  event.preventDefault()

  let locationId = event.target.locationId.value

  await axios.put(`${backendUrl}/locations/${locationId}`, {
    name: event.target.name.value,
    locationId: locationId
  })

  this.getLocations()
}


deleteLocation = async (event) => {
event.preventDefault()

  let locationId = event.target.id

  await axios.delete(`${backendUrl}/locations/${locationId}`)

  this.getLocations()
}


  // Signup, Login, Logout
  signup= async(event)=>{
    event.preventDefault()
    await axios.post(`${backendUrl}/auth/signup`,{
      name: event.target.name.value,
      email: event.target.name.value,
      username: event.target.name.value,
      password: event.target.password.value
    })
    this.getUsers()
   
  }
  login= async(event)=>{
    console.log(event)
    event.preventDefault()
    console.log(event.target.username.value)
    let response = await axios.post(`${backendUrl}/auth/login`,{
      
      username: event.target.username.value,
      password: event.target.password.value
    })
    console.log(response.data)
    this.setState({ 
      
      userId: response.data.userId,
      loggedIn: true
    })
    
    this.getLocations()
  }
  // Methods: User Profile
  logout=(event)=>{
    event.preventDefault()
    this.setState({
      loggedIn: false
    })
    
  }

//Methods
  render () {
  return (
    <div className="App">
      <nav className="nav">
        <Link className="nav-home" to="/"> </Link>
        {/* <Link className="nav-events" to="/AllLocations">Events</Link>
        <Link className="nav-login" to="/login" ><FaUser />  Login</Link>
        <Link className="nav-signup" to="/signup"><FaUserPlus /> Signup</Link> */}
        <Header {...this.state}{...this.props} logout={this.logout}/>
      </nav>
      <main>
        <Switch>
        <Route exact path="/" component={()=>
              <Homepage users={this.state.users} locations={this.state.locations}/>
            }/>
        <Route 
          exact
          path="/AllLocations"
          component={() => <AllLocations locations={this.state.locations} loggedIn = {this.state.loggedIn} 
          addLocation = {this.addLocation}
          deleteLocation = {this.deleteLocation}
          />}
        />
        <Route
          path="/locations/:id"
          component={(routerProps) => <LocationDetail
          {...routerProps}
          locations={this.state.locations}
          addEvent={this.addEvent}
          updateLocation={this.updateLocation}
          /> }
        />
     

        <Route path="/login" component={(routerProps)=>
              <Login {...routerProps} userId={this.state.userId} login={this.login}/>
              
            }/>
            <Route path="/signup" component={(routerProps)=>
              <Signup {...routerProps} user={this.state.user} signup={this.signup}/>}/>

        <Route path="/*" render={() => <Redirect to="/" />} />
      </Switch>
      </main>



{/* Footer */}
      <footer className="footer">
          <Footer/>
      </footer>

    </div>
  );
}
}

export default App;
