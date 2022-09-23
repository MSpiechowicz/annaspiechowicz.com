import React from "react";
import PropTypes from "prop-types";

function AppExperienceItem({ title, description, color }) {
  return (
    <div className="flex flex-col">
      <h3 className={`text-2xl md:text-4xl font-bold
        ${color === 'red' && 'text-red'}
        ${color === 'blue' && 'text-blue'}
        ${color === 'yellow' && 'text-yellow'}
        ${color === 'green' && 'text-green'}
      `}>
        {title}
      </h3>
      <p className="text-sm md:text-base">
        {description}
      </p>
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
    'green',
  ]),
}

export default AppExperienceItem;
