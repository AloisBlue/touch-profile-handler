import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../../images/avatar.png";
import { Link } from "react-router-dom";

const UserItems = ({ user }) => {
  return (
    <div className="view-actions">
      <div className="user-section">
        <div>
          <Link to={`/edit-users/${user.id}`} className="user-link">more</Link>
          <img
            className="image"
            src={avatarImage}
            width="25px"
            height="20px"
            alt="Profile"
          />
        </div>
      <p className="user-name">{user.name}</p>
      </div>
    </div>
  );
}

UserItems.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired
}

export default UserItems;
