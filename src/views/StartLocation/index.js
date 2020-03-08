import React, { Fragment, Component } from "react";
import StartLocationButton from "../../components/StartLocationButton";
import UpdateView from "../UpdateView";
import Header from '../../components/Header';
import './style.css';

export default class StartLocation extends Component {

  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      eventStarted: false
    }

    this.getMyLocation = this.getMyLocation.bind(this);
    this.startTrip = this.startTrip.bind(this);
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      });
    }
  }

  startTrip() {
    this.setState({ eventStarted: true });
  }



  render() {

    return (

      <Fragment>

        {!this.state.eventStarted &&
        <div>
          <h1>StaySafe</h1>
          <div className="start-location">
            

            <div className="container start-trip"><h2>Click to begin trip.</h2></div>
              

              <StartLocationButton
                text='Start'
                getMyLocation={this.getMyLocation}
                startTrip={this.startTrip} />
            </div>
            </div>
          
        }
        {this.state.eventStarted && <UpdateView />}

        <p style={{ color: "white" }}>{this.state.latitude}</p>
        <p style={{ color: "white" }}>{this.state.longitude} </p>


      </Fragment>
    )
  }
}