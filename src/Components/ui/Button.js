import React from "react";

const Button = ({ children, onClick, variant = "primary", disabled }) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium focus:outline-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  const classes = `${baseStyles} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
