import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip} from '../../../ducks/reducer'

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };

    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleNext = this.handleNext.bind(this);  
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip
    });
  }

  handleName(val) {
    this.setState({ name:val });
  }
  handleAddress(val) {
    this.setState({ address:val });
  }
  handleCity(val) {
    this.setState({ city:val });
  }
  handleState(val) {
    this.setState({ state:val });
  }
  handleZip(val) {
    this.setState({ zip:val });
  }

  handleNext() {
    console.log("this.props are", this.props)
    let { updateName, updateAddress, updateCity, updateState, updateZip} = this.props;

    updateName(this.state.name);
    console.log("this.states are in the reducer", this.state.name)

    updateAddress(this.state.address);
    updateCity(this.state.city);
    updateState(this.state.state);
    updateZip(this.state.zip)
  };


  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <h3>Property Name</h3>
        <input
            value={this.state.name} type ='text'
            onChange={ e => this.handleName(e.target.value)}
        />
        <h3>Address</h3>
        <input
            value={this.state.address} type ='text'
            onChange={ e => this.handleAddress(e.target.value)}
        />
        <h3>City</h3>
        <input
            value={this.state.city} type ='text'
            onChange={ e => this.handleCity(e.target.value)}
        />
        <h3>State</h3>
        <input
            value={this.state.state} type ='text'
            onChange={ e => this.handleState(e.target.value)}
        />
        <h3>Zip</h3>
        <input
            value={this.state.zip} type = 'integer'
            onChange={ e => this.handleZip(e.target.value)}
        />
        <div>
        <Link to='/wizard/step2'>
          <button onClick={() => {this.handleNext()}}> Complete</button>
        </Link>
        </div>

        {/* <Link to='/'>
          <button onClick={(e) => {this.handleNext()}}> Cancel</button>
        </Link> */}
      </div>
    );
  }
}

function mapStateToProps( State ){
  // console.log(State)
  let { name, address, city, state, zip } = State;
  return { name, address, city, state, zip }
}

export default connect( mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(StepOne);
