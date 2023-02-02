import React from "react";
import "./styles.scss";

const Button = ({text, onClick}) => {
  const classes = `button ${text.split(" ")[0].toLowerCase()}`

  return (
      <button onClick={onClick} className={classes}>
        {text}
      </button>
  );
}

export default Button;
