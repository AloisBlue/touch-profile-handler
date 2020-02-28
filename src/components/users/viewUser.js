import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users";

class ViewUser extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="view-users">
        <div className="users-card">
          <h4 className="h4-users">All Users</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.users.allUsers,
  loading: state.users.loading
})

export default connect(mapStateToProps, { getUsers })(ViewUser);
