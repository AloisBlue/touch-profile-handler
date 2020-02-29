import React from "react";
import Spinner from "../../images/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={Spinner}
        alt="Loading..."
        style={{ margin: 'auto', display: 'block' }}
      />
    </div>
  );
}

export default Loader;
