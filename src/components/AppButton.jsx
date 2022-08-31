import React from "react";
import PropTypes from "prop-types";

function AppButton({ name, href, alt, secondary }) {
  const dynamicClassName = secondary ?
    "app__button app__button--secondary" : "app__button";

  return (
    <a
      alt={alt}
      aria-label={`${name} button`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={dynamicClassName}
    >
      {name}
    </a>
  );
}

AppButton.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  alt: PropTypes.string,
  secondary: PropTypes.bool,
}

AppButton.defaultProps = {
  href: "/",
  alt: "",
  secondary: false,
}

export default AppButton;
