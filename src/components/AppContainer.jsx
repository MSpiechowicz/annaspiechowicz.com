import React from "react";
import PropTypes from "prop-types";

function AppContainer({ items }) {
  return (
    <div className="flex flex-col justify-center self-center">
      {items}
    </div>
  );
}

AppContainer.propTypes = {
  items: PropTypes.node.isRequired
}

export default AppContainer;
