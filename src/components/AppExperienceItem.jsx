import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-undef
const definedColorMap = new Map();
definedColorMap.set("red", "text-red");
definedColorMap.set("blue", "text-blue");
definedColorMap.set("yellow", "text-yellow");
definedColorMap.set("green", "text-green");

function AppExperienceItem({ title, description, color }) {
  const getStyle = () => {
    if (definedColorMap.has(color)) {
      return definedColorMap.get(color);
    }
    return "text-white";
  };

  return (
    <div className="flex flex-col">
      <h3 className={`text-2xl md:text-4xl font-bold ${getStyle()}`}>
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
