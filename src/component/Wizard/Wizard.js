import React, { Component } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { connect } from 'react-redux'
import { cancel } from '../../ducks/reducer.js'

class Wizard extends Component {
  cancel() {
    let {cancel} = this.props;
    cancel();
  }

  render() {
    return (
      <div>
        
        <Link to='/'>
          <button onClick={() => this.cancel()}>Cancel</button>
        </Link>

        <Switch>
            <Route path='/wizard/step1' component={ StepOne }   />
            <Route path='/wizard/step2' component={ StepTwo }   />
            <Route path='/wizard/step3' component={ StepThree }   />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {cancel})(Wizard);

