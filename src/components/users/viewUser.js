import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users";
import ViewActions from "./viewActions";
import  Loader from "./loader";

class ViewUser extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { allUsers, loading } = this.props;
    let userItems;
    let lengthDisplay;

    if (allUsers === null || loading) {
      lengthDisplay= <span>...</span>
      userItems = <Loader />
    } else if (allUsers.length > 0) {
      lengthDisplay = allUsers.length;
      userItems = allUsers.map(user =>
        <div>
          <ViewActions key={user.id} user={user} />
        </div>
      )
    } else {
      userItems = <p>No users available for display</p>
    }

    return (
      <div className="view-users">
        <div className="users-card">
          <h4 className="h4-users">All Users <span className="l-display">({lengthDisplay})</span></h4>
          <div className="users-list">
            <span>{ userItems }</span>
          </div>
        </div>
      </div>
    );
  }
}

ViewUser.propTypes = {
  getUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  allUsers: state.users.allUsers,
  loading: state.users.loading
});

export default connect(mapStateToProps, { getUsers })(ViewUser);
