import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { Link } from "react-router-dom";
import './dash.css';
// import step1 from '../Wizard/StepOne/StepOne'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/houses") //fetch my houses
      .then(response => {
        this.setState({
          houses: response.data
        });
        console.log(response.data); 
      })
      .catch(err => console.log(err));
  }

  deleteHouse(id) {
    //invoked everytime it is called from House.js >>props.id
    //endpoints works in postman

    axios.delete(`/api/house/${id}`)
          .then(response => {
            console.log(response.data)
            this.setState({
                house: response.data
            })
          })

    this.getAllHouses();
  }

  getAllHouses() {    //fetch works fo sho
    axios
      .get("/api/houses")
      .then(response => {
        this.setState({
          houses: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let mappedHouses = () => {
      return this.state.houses.map(house => {
        const {
          id,
          name,
          address,
          city,
          state,
          zip, 
          img,
          mortgage,
          rent
        } = house; //destructured

        return (
          <div key={id}>
            <House id={id}
                  name={name}
                  address={address}
                  city={city}
                  state={state}
                  zip={zip}
                  img={img}
                  mortgage={mortgage}
                  rent={rent}
                  deleteHouse={this.deleteHouse}
            />
          </div>
        );
      });
    };
    return (
      <div className="App">
        <div className="dash">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button> Add New Property </button>
          </Link>
        </div>

        <House />
          <h3>Home Listings</h3>


        {mappedHouses()}
      </div>
    );
  }
}
