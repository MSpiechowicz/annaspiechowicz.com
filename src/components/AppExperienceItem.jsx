import React from "react";
import PropTypes from "prop-types";

function AppExperienceItem({ title, description, color }) {
  return (
    <div className="app__experience__item">
      <h3
        className={`app__experience__item--${color}`}
      >
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

AppExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'red',
    'blue',
    'yellow',
  ]),
}

export default AppExperienceItem;
