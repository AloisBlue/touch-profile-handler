import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleUser } from "../../actions/users";
import EditForm from "./editForm";
import Loader from "./loader";

class EditUser extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSingleUser(this.props.match.params.id);
    }
  }

  render() {
    const { singleUser, loading } = this.props;
    let displayUser;

    if (singleUser === null || loading) {
      displayUser = <div className="central">
        <p style={{color: '#008dba'}}>Loading...</p>
        <Loader />
      </div>
    } else if (singleUser.length !== 0) {
      displayUser = <EditForm singleUser={singleUser}/>
    } else {
      displayUser = <p>No user</p>
    }

    return (
      <div className="edit-user">
        <div>
          <button
            className="back-button"
            type="button"
            onClick={() => {
              this.props.history.push("/view-users")
            }}
          >
            Back to All Users
          </button>
          <div>
            <span>{displayUser}</span>
          </div>
        </div>
      </div>
    );
  }
}

EditUser.propTypes = {
  getSingleUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  singleUser: state.users.singleUser,
  loading: state.users.loading
});

export default connect(mapStateToProps, { getSingleUser })(EditUser);
