import React from "react";
import PropTypes from "prop-types";

function AppContainer({ items }) {
  return (
    <div className="app__container">
      {items}
    </div>
  );
}

AppContainer.propTypes = {
  items: PropTypes.node.isRequired
}

export default AppContainer;
