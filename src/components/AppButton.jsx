import React from "react";
import PropTypes from "prop-types";

function AppButton({ name, href, alt, secondary }) {
  return (
    <a
      alt={alt}
      aria-label={`${name} button`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${secondary ? "bg-white"
          : "bg-blue"}
        ${secondary ? "text-blue"
          : "text-white"}
        ${secondary ? "hover:bg-blue hover:text-white"
          : "hover:bg-white hover:text-blue"}
        border-2
        border-blue
        rounded-lg
        p-3
        text-xl
        md:text-2xl
        transition
        duration-500
        ease-in-out
      `}
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
