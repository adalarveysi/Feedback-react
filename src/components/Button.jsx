import React from "react";

const Button = ({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
