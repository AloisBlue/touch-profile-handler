import React, { Component } from "react";
import PropTypes from "prop-types";

class Landing extends Component {
  
  render() {
    return (
      <div className="landing">
        <p className="modal-background">Want to see profiles?</p>
        <p className="modal-text">View or Edit<br/> the profiles</p>
        <div className="button">
          <button
            type="button"
            className="button-background"
            onClick={() => {
              this.props.history.push("/view-users")
            }}
          >
            View Users
          </button>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default Landing;
