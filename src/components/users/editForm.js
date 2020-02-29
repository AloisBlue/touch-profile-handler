import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import { updateUser } from "../../actions/users";
import Avatar from "../../images/avatar.png";

class EditForm extends Component {
  constructor() {
    super();

    this.state={
      data: {}
    };
  }

  componentDidMount() {
    const { singleUser } = this.props;
    this.setState({
      data: singleUser
    });
  }

  onChange = (e) =>
  this.setState({
    ...this.state,
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const { singleUser } = this.props;
    const { data } = this.state;
    this.props.updateUser(data, singleUser.id, this.props.history);
  }

  render() {
    const { data } = this.state;
    let upperCase;

    if (data.name) {
      upperCase = data.name.toUpperCase();
    } else {
      upperCase = null;
    }

    return (
      <div className="edit-form">
        <div className="">
          <p className="update">Last updated at <Moment format="DD ddd, MMM YYYY.">{data.updated_at}</Moment></p>
          <h5 className="name-info">{upperCase}</h5>
          <p className="join">Joined at <Moment format="DD ddd, MMM YYYY.">{data.created_at}</Moment></p>
          <div>
            <img
              className="image-edit"
              src={Avatar}
              alt="Profile"
              width="80px"
              height="80px"
            />
          </div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={this.onChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            <label htmlFor="occupation">Occupation</label>
            <input
              id="occupation"
              type="text"
              name="occupation"
              value={data.occupation}
              onChange={this.onChange}
            />
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              type="text"
              name="bio"
              value={data.bio}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Edit Form"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
  singleUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired
}

export default connect(null, { updateUser })(withRouter(EditForm));
